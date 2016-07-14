# seneca-mesh example

The repo has a base which needs to be started before starting anything else. The base serves as the entry point into the mesh.

    cd base
    npm install
    node index.js

Next bring up the service1. From the parent directory:

    cd service1
    npm install
    node index.js

You can bring up another instance of the same service by running again
    
    node index.js 

Now bring up the client. From the parent directory

    cd service2
    npm install
    node index.js

If you run the below curl command you will see the request being executed in a round robin manner between the 2 instances of the service1 that you have started.

    curl http://localhost:10081/api/retrieve/123
