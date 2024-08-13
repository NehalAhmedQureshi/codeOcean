#include <stdio.h>
int main()
{
    int yourBirthYear;
    int yourBirthMonth;
    int yourBirthDate;
    int currentYear;
    int currentMonth;
    int currentDate;

    // get data of birthday
    printf("Enter your Birth Date");
    scanf("%d", &yourBirthDate);
    printf("Enter your Birth Month");
    scanf("%d", &yourBirthMonth);
    printf("Enter your Birth Year");
    scanf("%d", &yourBirthYear);
    // get data of current
    printf("Enter current Date");
    scanf("%d", &currentDate);

    printf("Enter current Month");
    scanf("%d", &currentMonth);

    printf("Enter current Year");
    scanf("%d", &currentYear);

    int year = currentYear - yourBirthYear;
    printf("year::: %d ", year);

    return 0;
}