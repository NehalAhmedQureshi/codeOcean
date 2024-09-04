#include<stdio.h>

int main(){

    int num1;
    printf("Two Number Addition Software \n" );
    printf("Enter num1 you want to add ");
    scanf("%d" , &num1);
    int num2 ;
    printf("Enter num2 you want to add ");
    scanf("%d" , &num2);
    printf("first number is %d " , num1);
    printf(" & second number is %d \n" , num2);
    int sum = num1 + num2;
    printf("sum ::: %d \n", sum);
    int end ;
    printf("would you like it: yes or no ");
    scanf("%d" , &end);

    return 0; 
}
