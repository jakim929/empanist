(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

/* Package-scope variables */
var notoriiArray;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/notorii_array/packages/notorii_array.js                  //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/notorii:array/notorii-array.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
notoriiArray ={};                                                                                                    // 1
                                                                                                                     // 2
/**                                                                                                                  // 3
Removes one or more items from an array                                                                              // 4
// Array Remove - By John Resig (MIT Licensed)                                                                       // 5
@usage                                                                                                               // 6
// Remove the second item from the array                                                                             // 7
remove(arr1, 1);                                                                                                     // 8
// Remove the second-to-last item from the array                                                                     // 9
remove(arr1, -2);                                                                                                    // 10
// Remove the second and third items from the array                                                                  // 11
remove(arr1, 1,2);                                                                                                   // 12
// Remove the last and second-to-last items from the array                                                           // 13
remove(arr1, -2,-1);                                                                                                 // 14
@toc 0.                                                                                                              // 15
@method remove                                                                                                       // 16
@param {Array} arr1 The array to remove from                                                                         // 17
@param {Number} from The index to remove (or remove starting from if removing more than one)                         // 18
@param {Number} [to] The index to remove up to. Pass in boolean false to not use this parameter (i.e. if want to use 'params' but not 'to')
@param {Object} [params]                                                                                             // 20
  @param {Boolean} [modifyOriginal] True to modify the passed in array itself (thus no return value is needed) - this is better for performance but can lead to unexpected behavior since the original version is modified everywhere it's used. NOTE: this doesn't seem to be working 100% properly - the returned value IS correct and no '.copy' is used so still good for performance, BUT the original array is cut to smaller length and is wrong..   //@todo - fix this..
@return {Array} arr1 The new array with the appropriate element(s) removed                                           // 22
@usage                                                                                                               // 23
  var arr1 =[                                                                                                        // 24
    {_id:1, name:'Joe'},                                                                                             // 25
    {_id:2, name:'Bob'},                                                                                             // 26
    {_id:3, name:'Sally'},                                                                                           // 27
    {_id:4, name:'Sue'},                                                                                             // 28
    {_id:5, name:'Becky'}                                                                                            // 29
  ];                                                                                                                 // 30
  var smallerArray =notoriiArray.remove(arr1, 1, false, {});    //can also just do 'notoriiArray.remove(arr1, 1);' if not using 'to' or 'params' parameters
*/                                                                                                                   // 32
notoriiArray.remove =function(arrOrig, from, to, params) {                                                           // 33
  // console.log(arrOrig);   //TESTING                                                                               // 34
  if(params ===undefined) {                                                                                          // 35
    params ={};                                                                                                      // 36
  }                                                                                                                  // 37
  var arr1;                                                                                                          // 38
  if(params.modifyOriginal !==undefined && params.modifyOriginal) {                                                  // 39
    arr1 =arrOrig;                                                                                                   // 40
  }                                                                                                                  // 41
  else {    //make a copy first                                                                                      // 42
    arr1 =EJSON.clone(arrOrig);   //don't' change the original version of the array                                  // 43
  }                                                                                                                  // 44
  // console.log('array remove: before: '+JSON.stringify(arr1));                                                     // 45
  var rest = arr1.slice((to || from) + 1 || arr1.length);                                                            // 46
  arr1.length = from < 0 ? arr1.length + from : from;                                                                // 47
  // arr1 =arr1.push.apply(this, rest);                                                                              // 48
  // arr1.push(rest);                                                                                                // 49
  arr1 =arr1.concat(rest);                                                                                           // 50
  // console.log('array remove: after: '+JSON.stringify(arr1));                                                      // 51
  return arr1;                                                                                                       // 52
};                                                                                                                   // 53
                                                                                                                     // 54
/**                                                                                                                  // 55
Returns the index of an 2D []{} associative array when given the key & value to search for within the array. Like native javascript '.indexOf()' but for arrays of objects.
@toc 1.                                                                                                              // 57
@method findArrayIndex                                                                                               // 58
@param {Array} array 2D array []{} to search                                                                         // 59
@param {String} key Object key to check value against                                                                // 60
@param {Mixed} val To match key value against                                                                        // 61
@param {Object} [params]                                                                                             // 62
  @param {Boolean} oneD True if it's a 1D array                                                                      // 63
@return {Number} The index of the element OR -1 if not found                                                         // 64
@usage                                                                                                               // 65
  var arr1 =[                                                                                                        // 66
    {_id:1, name:'Joe'},                                                                                             // 67
    {_id:2, name:'Bob'},                                                                                             // 68
    {_id:3, name:'Sally'},                                                                                           // 69
    {_id:4, name:'Sue'},                                                                                             // 70
    {_id:5, name:'Becky'}                                                                                            // 71
  ];                                                                                                                 // 72
  var index1 =notoriiArray.findArrayIndex(arr1, 'name', 'Bob', {});   //index1 will return 1 since the 2nd element (array index 1 since arrays are 0 indexed) is the one with 'Bob' in the 'name' field
*/                                                                                                                   // 74
notoriiArray.findArrayIndex =function(array, key, val, params) {                                                     // 75
  var ii;                                                                                                            // 76
  var index =-1;                                                                                                     // 77
  if(params.oneD)                                                                                                    // 78
  {                                                                                                                  // 79
    for(ii=0; ii<array.length; ii++)                                                                                 // 80
    {                                                                                                                // 81
      if(array[ii] == val)                                                                                           // 82
      {                                                                                                              // 83
        index = ii;                                                                                                  // 84
        break;                                                                                                       // 85
      }                                                                                                              // 86
    }                                                                                                                // 87
  }                                                                                                                  // 88
  else                                                                                                               // 89
  {                                                                                                                  // 90
    for(ii=0; ii<array.length; ii++)                                                                                 // 91
    {                                                                                                                // 92
      if(array[ii][key] == val)                                                                                      // 93
      {                                                                                                              // 94
        index = ii;                                                                                                  // 95
        break;                                                                                                       // 96
      }                                                                                                              // 97
    }                                                                                                                // 98
  }                                                                                                                  // 99
  return index;                                                                                                      // 100
};                                                                                                                   // 101
                                                                                                                     // 102
/**                                                                                                                  // 103
array has 2 elements: 1st is an identifier (for use to match later), 2nd gets sorted & keeps it's identifier with it // 104
@return array1                                                                                                       // 105
*/                                                                                                                   // 106
function subSort2D(array1)                                                                                           // 107
{                                                                                                                    // 108
  var left;                                                                                                          // 109
  var right;                                                                                                         // 110
  var beg =[];                                                                                                       // 111
  var end =[];                                                                                                       // 112
  var pivot =[];                                                                                                     // 113
  pivot[0] =[];                                                                                                      // 114
  pivot[0][0] =[];                                                                                                   // 115
  pivot[0][1] =[];                                                                                                   // 116
  pivot[1] =[];                                                                                                      // 117
  pivot[1][0] =[];                                                                                                   // 118
  pivot[1][1] =[];                                                                                                   // 119
  var count =0;                                                                                                      // 120
                                                                                                                     // 121
  beg[0] =0;                                                                                                         // 122
  //end[0] =rosterLength-1;                                                                                          // 123
  //end[0] =array1.length-1;                                                                                         // 124
  end[0] =array1.length;    //CHANGE - not sure why... (array1 doesn't have a blank last index so don't have to subtract 1 anymore...)
  while(count>=0)                                                                                                    // 126
  {                                                                                                                  // 127
    left =beg[count];                                                                                                // 128
    right =end[count]-1;                                                                                             // 129
    if(left <right)                                                                                                  // 130
    {                                                                                                                // 131
      pivot[0][1] =array1[left][1];                                                                                  // 132
      pivot[0][0] =array1[left][0];                                                                                  // 133
      while(left <right)                                                                                             // 134
      {                                                                                                              // 135
        while((array1[right][1] >= pivot[0][1]) && (left <right))                                                    // 136
        {                                                                                                            // 137
          right--;                                                                                                   // 138
        }                                                                                                            // 139
        if(left <right)                                                                                              // 140
        {                                                                                                            // 141
          array1[left][0] =array1[right][0];                                                                         // 142
          array1[left][1] =array1[right][1];                                                                         // 143
          left++;                                                                                                    // 144
        }                                                                                                            // 145
        while((array1[left][1] <= pivot[0][1]) && (left <right))                                                     // 146
        {                                                                                                            // 147
          left++;                                                                                                    // 148
        }                                                                                                            // 149
        if(left <right)                                                                                              // 150
        {                                                                                                            // 151
          array1[right][0] =array1[left][0];                                                                         // 152
          array1[right][1] =array1[left][1];                                                                         // 153
          right--;                                                                                                   // 154
        }                                                                                                            // 155
      }                                                                                                              // 156
      array1[left][0] =pivot[0][0];                                                                                  // 157
      array1[left][1] =pivot[0][1];                                                                                  // 158
      beg[count+1] =left+1;                                                                                          // 159
      end[count+1] =end[count];                                                                                      // 160
      end[count] =left;                                                                                              // 161
      count++;                                                                                                       // 162
    }                                                                                                                // 163
    else                                                                                                             // 164
    {                                                                                                                // 165
      count--;                                                                                                       // 166
    }                                                                                                                // 167
  }                                                                                                                  // 168
                                                                                                                     // 169
  //var yes =1;   //dummy                                                                                            // 170
  return array1;                                                                                                     // 171
}                                                                                                                    // 172
                                                                                                                     // 173
/**                                                                                                                  // 174
takes a multidimensional array & array index to sort by and returns the multidimensional array, now sorted by that array index
@method sort2D                                                                                                       // 176
@param {Array} arrayUnsorted 2D array []{} of objects to sort                                                        // 177
@param {Number} column Array index to sort by (note first one is 0)                                                  // 178
@param {Object} [params]                                                                                             // 179
  @param {String} [order] 'desc' for reverse order sort                                                              // 180
@return {Array} sortedArray input array of objects []{} but now sorted                                               // 181
@usage                                                                                                               // 182
  var arr1 =[                                                                                                        // 183
    {_id:1, name:'Joe'},                                                                                             // 184
    {_id:2, name:'Bob'},                                                                                             // 185
    {_id:3, name:'Sally'},                                                                                           // 186
    {_id:4, name:'Sue'},                                                                                             // 187
    {_id:5, name:'Becky'}                                                                                            // 188
  ];                                                                                                                 // 189
  var sortedArray =notoriiArray.sort2D(arr1, 'name', {});   //will now have array sorted by alphabetical order by name (i.e. Becky, Bob, Joe, Sally, Sue)
*/                                                                                                                   // 191
notoriiArray.sort2D =function(arrayUnsorted, column, params) {                                                       // 192
  var tempArray =[];  //copy calHide array here to sort; then re-copy back into calHide array once sorted            // 193
  var array2D =[];                                                                                                   // 194
  var ii;                                                                                                            // 195
  for(ii =0; ii<arrayUnsorted.length; ii++)                                                                          // 196
  {                                                                                                                  // 197
    tempArray[ii] =[];                                                                                               // 198
    tempArray[ii] =arrayUnsorted[ii];                                                                                // 199
    array2D[ii] =[ii, tempArray[ii][column]];                                                                        // 200
  }                                                                                                                  // 201
                                                                                                                     // 202
  array2D =subSort2D(array2D);    //function    - array2D will come out sorted                                       // 203
                                                                                                                     // 204
  var sortedArray =[];                                                                                               // 205
  var counter =0;                                                                                                    // 206
  if(params.order !==undefined && params.order =='desc')                                                             // 207
  {                                                                                                                  // 208
    for(ii=(array2D.length-1); ii>=0; ii--)                                                                          // 209
    {                                                                                                                // 210
      sortedArray[counter] =tempArray[array2D[ii][0]];                                                               // 211
      counter++;                                                                                                     // 212
    }                                                                                                                // 213
  }                                                                                                                  // 214
  else                                                                                                               // 215
  {                                                                                                                  // 216
    for(ii =0; ii<array2D.length; ii++)                                                                              // 217
    {                                                                                                                // 218
      sortedArray[counter] =tempArray[array2D[ii][0]];                                                               // 219
      counter++;                                                                                                     // 220
    }                                                                                                                // 221
  }                                                                                                                  // 222
                                                                                                                     // 223
  return sortedArray;                                                                                                // 224
};                                                                                                                   // 225
                                                                                                                     // 226
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['notorii:array'] = {}, {
  notoriiArray: notoriiArray
});

})();

//# sourceMappingURL=notorii_array.js.map
