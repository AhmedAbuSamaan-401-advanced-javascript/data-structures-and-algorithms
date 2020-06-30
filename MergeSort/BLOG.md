## INPUT ARRAY : [8,4,23,42,16,15]

the array will be divided into 2 parts (left,right)

left array =[ 8,4,23 ]  right array =[ 42,16,15 ]

Comparing each 2 numbers together 4 with 8 , then replace the two elements into 2 element array with left= 4,8,then the will be 23 after it we will compare 42 with 16 and move them back into 2 element array with left= 16,42 and right = 15.

Compare each side in the array , When the value is a smallest its gonna moves into the original array then the counters will increament.

So the result will be merged => 4,8,23 and 15,16,42

at the end will return the merge of 4,8,23 and 15,16,42 => sorted array [4,8,15,16,23,42].
