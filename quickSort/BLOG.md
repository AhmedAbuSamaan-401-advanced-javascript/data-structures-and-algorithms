# input Array [10,5,20,40,15,18]

### first Step:-
bring Last value [18].Then compare first 2 values 10 and 5 and swap their positions, 10 and 5 were in the indexes 0 and 1. Move forward while using the comparisons to find the rest of the elements to be bigger than the pivot.at the end of the array, we exchange the pivot with the lowest unsorted index. the array will be [10,5,18,20,40,15].

### second Step:-
Partitions the two arrays, [10,5] and [40,15,20]. Then call quicksort for both arrays and go by the same process. at first array we exchange 10 and 5. In the second array since 40 is bigger we move forward and compare 15 and 20. Since 15 is smaller we swap their positions with (40) and then at the end of the array we exchange the pivot with 40. the array becomes [5,10,15,18,20,40].

### third Step:-
Now the Partitions is, [18,20], 18 is smaller then 40 we will exchange 40 with the pivot, now the array has one element after partition, [15] and the pivot is 40, the pivot is bigger so we will not exchange the array will be [5,10,15,18,20,40].