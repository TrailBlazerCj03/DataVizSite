#include <stdio.h>
#define Meters_Per_Foot 0.3048

int
main(void)
{
	double Meters, Feet;
	printf("Enter the distance in Feet -> ");
	scanf("%lf", &Feet);

	Meters= Meters_Per_Foot * Feet;
	printf("That equals %f meters.\n", Meters);
	return(0);
}