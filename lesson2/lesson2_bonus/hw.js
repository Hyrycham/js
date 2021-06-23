
// повдаляти зайві пробіли
let str1= '       Harry                  Potter       ';
let str2='                         Ron            Whisley              ';
let str3='   Hermione                Granger       ';

let arr=[str1,str2,str3];
for( i=0;i<arr.length;i++){
names=arr[i].trim();
while (names.includes('  '))
{    names=names.replace('  ',' ');}
arr[i]=names;
}
console.log (arr);

