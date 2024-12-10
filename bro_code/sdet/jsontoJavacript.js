let data={
    "company": {
      "name": "Tech Solutions",
      "location": "San Francisco, California",
      "employees": [
        { "name": "Alice", "position": "Engineer" },
        { "name": "Bob", "position": "Manager" }
      ],
      "projects": [
        { "name": "Redesign", "status": "In Progress" },
        { "name": "App Development", "status": "Completed" }
      ]
    }
  }

 let obj=JSON.parse(data);
 console.log(obj.projects.name);
  