type StringThatIsNumber = "100" extends `${infer U extends number}` ? U : never;
