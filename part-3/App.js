const App = () => {
    return (
      <div>
        <Person
            name="Person1"
            age={30}
            hobbies={["hobby1", "hobby2", "hobby3"]}
        />
        <Person 
            name="Person2" 
            age={31} 
            hobbies={["hobby1", "hobby2"]} />
        <Person
            name="Person3"
            age={12}
            hobbies={["hobby1", "hobby2"]}
        />
        <Person
            name="Person4"
            age={9}
            hobbies={["hobby1", "hobby2", "hobby3"]}
        />
      </div>
    );
  }