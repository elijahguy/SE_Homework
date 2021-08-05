arr =[1, 5, -10, 50]
len=arr.legnth 


for(i=0;i<len-1;i++)
{
   for (j=i+1; j<len; j++)
   {

   if (arr[i]>arr[j])
   {
   temp=arr 
   arr[j]=arr[i]
   arr[i]= temp
       }
    }
}

console.log(arr) 