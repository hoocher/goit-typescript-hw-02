/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  monday = "monday",
  tuesday = "tuesday",
  wednesday = "wednesday",
  thursday = "thursday",
  friday = "friday",
  saturday = "saturday",
  sunday = "sunday",
}

let myFunc: (arg: string) => boolean;

myFunc = (arg) => {
  if (arg === "sunday" || arg === "saturday") {
    return false;
  } else {
    return true;
  }
};

myFunc(Days.monday);
