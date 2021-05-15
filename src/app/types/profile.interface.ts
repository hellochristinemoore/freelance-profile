//interface is a mechanism to enforce contracts also knows as modules
//this contract/interface aligns with the JSON data object retireved from the API request
export interface Profile {
  name: string;
  surname: string;
  age: number;
}
