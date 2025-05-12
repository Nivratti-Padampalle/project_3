import java.util.Scanner;
class ipaddress{
public static void main(String args[]){
int n;
int count=0;
String ans="";
int i;
Scanner obj=new Scanner(System.in);
System.out.println("enter the no of octate you want in ip address");
n=obj.nextInt();
if(n>4){
System.out.println("invalid ip address please enter a valid ip octate ");
}
int ip[]=new int[12];
System.out.print("enter the ip address each octate ");
for(i=0;i<n;i++){
ip[i]=obj.nextInt();
}
System.out.println("validation of ip is started");
for(i=0;i<n;i++){
 if(ip[i] >=0 && ip[i]<=255){
  count++;
  ans="valid";
  System.out.println(ans);
}
}
System.out.println(count);
if(count==4){
  System.out.println("prefect match ip address is valid !");
}
else{
   System.out.println("mismatch found in  ip address it is not  valid !");
}
 i=0;
if(ip[i]==0 && ip[i]==127){
 System.out.println("you entered ip address is reserve ip address enter another ip address !");
}
 if(ip[i]>=1 && ip[i]<=126){
System.out.println("your ip address is class A !");
}
if(ip[i]>=128 && ip[i]<=191){
System.out.println("your ip address is class B !");
}
 if(ip[i]>=192&& ip[i]<=223){
System.out.println("your ip address is class C !");
}
if(ip[i]>=224 && ip[i]<=238){
System.out.println("your ip address is class D !");
}
if(ip[i]>=240 && ip[i]<=255){
System.out.println("your ip address is class E !");
}
}
}