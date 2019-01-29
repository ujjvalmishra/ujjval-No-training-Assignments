// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  var max = 0;
  var max2 = 0;
 
  for(var i=0;i<array.length;i++){
      if(max<array[i])
        {
          max=array[i];
        }
    }
  for(var i=0;i<array.length;i++){
      if(max2<array[i]&&array[i]<max)
        {
          max2=array[i];
        }
    }
  return max2;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string)
{
  var obj={};
  var count=0;
  var list=[];
  var flag=true;
  for(var i=0;i<string.length;i++)
  {
    flag=true;
    for(var j=0;j<list.length;j++)
      {
        if(string[i]==list[j])
          {
            flag=false;
          }
      }
      if(flag&&string[i]!==" ")
        {
          list[list.length]=string[i];
        }
   }

  for(var i=0;i<list.length;i++)
    {
      count=0;
      for(var j=0;j<string.length;j++)
        {
          if(list[i]==string[j])
            {
              count++;
            }
        }
      obj[list[i]]=count;
    }
  return obj;
 }


// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  var toReturn={};
  for(var i in unflatObject){
    if(!unflatObject.hasOwnProperty(i))continue;
    if(typeof(unflatObject[i])=='object'&& unflatObject[i]!==null){
      var flatObject=flatten(unflatObject[i]);
      for(var x in flatObject){
        if(!flatObject.hasOwnProperty(x))continue;
        toReturn[i+'.'+x]=flatObject[x];
       }
    }else{
      toReturn[i]=unflatObject[i];
    }
  }
  return toReturn;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
    var result = {}, temp, substrings, property, i;
    for (property in flatObject) {
        substrings = property.split('.');
        temp = result;
        for (i = 0; i < substrings.length - 1; i++) {
            if (!(substrings[i] in temp)) {
                if (isFinite(substrings[i + 1])) { 
                    temp[substrings[i]] = [];      
                } else {
                    temp[substrings[i]] = {};      
                    }
            }
            temp = temp[substrings[i]];
        }
        temp[substrings[substrings.length - 1]] = flatObject[property];
    }
    return result;
}
