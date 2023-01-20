type Type = {
    name: string;
    age: number;
    married: boolean;
 }
  
 type Union = keyof Type;
 // type Union = name | age | married
  
 const a:Union = 'name';
 const b:Union = 'age';
 const c:Union = 'married';