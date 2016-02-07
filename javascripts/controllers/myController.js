angular.module("myApp")
    .controller('myController',[
      function(){
          var self = this;
          this.sheetMatrices = [];
          this.rows = 5;
          this.columns = 5;
          var isRowsSorted = [];
          var isColumnsSorted = [];
          this.createGrid = function (){
              this.sheetMatrices = [];
              for(var i = 0; i < this.rows; i++){
                  isRowsSorted[i] = false;
                  var row = [];
                  for(var j = 0; j < this.columns; j++){
                      row.push({value: 0,position:(i-1)*this.columns + j});
                  }
                  this.sheetMatrices.push(row);
              }
              for(var j = 0; j < this.columns; j++){
                  isColumnsSorted[j] = false;
              }
          };
          this.createGrid();
          this.add = function(type,index){
              if(angular.equals(type,"ROW")){
                  var row = [];
                  for(var j = 0; j < this.columns; j++) {
                      row.push({value: 0,position:(index-1)*this.columns + j});
                  }
                  this.sheetMatrices.splice(index,0,row);
                  this.rows++;
              }else{
                  for(var j = 0; j < this.rows; j++) {
                      this.sheetMatrices[j].splice(index,0,{value: 0,position:(j-1)*this.columns + index});
                  }
                  this.columns++;
              }
          };
          this.delete = function(type,index){
              if(angular.equals(type,"ROW")){
                  this.sheetMatrices.splice(index,1);
                  this.rows--;
              }else{
                  for(var j = 0; j < this.rows; j++) {
                      this.sheetMatrices[j].splice(index,1);
                  }
                  this.columns--;
              }
          };
          this.sort = function(type,index){
              if(angular.equals(type,"ROW")){
                  isRowsSorted[index] = !isRowsSorted[index];
                  if(isRowsSorted[index]){
                      this.sheetMatrices[index].sort(function(a,b){
                          return a.value - b.value;
                      });
                  }else{
                      this.sheetMatrices[index].sort(function(a,b){
                          return a.position - b.position;
                      });
                  }
              }else{
                  isColumnsSorted[index] = !isColumnsSorted[index];
                  if(isColumnsSorted[index]){
                      this.sheetMatrices.sort(function(a,b){
                          return a[index].value - b[index].value;
                      });
                  }else{
                      this.sheetMatrices.sort(function(a,b){
                          return a[index].position - b[index].position;
                      });
                  }
              }
          };
    }]);

