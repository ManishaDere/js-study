const students = [
    {
      id: 56,
      name: "John",
    },
    {
      id: 57,
      name: "Hannes",
    },
  ];
  
  const newObj = students.reduce((acc, student) => {
    acc[student.id] = student.name;
    return acc;
  }, {});

  console.log("newObj ==>", newObj);
  
  // Expected output should be
  const result = {
    56: "John",
    57: "Hannes",
  };

  const arr = [1,2,3,9,4,5,6];
  const max = arr.reduce((acc, item) => {
    if(acc < item) {
      acc = item;
    }
    return acc;
  }, 0);

  console.log("max ==>", max);
  