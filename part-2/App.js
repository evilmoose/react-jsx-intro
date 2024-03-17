const App = () => {
    return (
      <div>
        <Tweet
          name="Person1 Test"
          username="person1"
          date={new Date().toDateString()}
          message="Test"
        />
        <Tweet
          name="Person2 Test"
          username="person2"
          date={new Date().toDateString()}
          message="Test"
        />
        <Tweet
          name="Person3 Test"
          username="person3"
          date={new Date().toDateString()}
          message="Test"
        />
      </div>
    );
  }