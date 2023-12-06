
        //The object that stores all todo list
        //This function get the data if there is any frm LS else returns a emty array
        const todoList = JSON.parse(localStorage.getItem('data')) || [];


        
        //Add the user input todo to the array
        function todoAdd(){
            //Storing the user input in a vaiable
            const inputTodo = document.querySelector('.js-input-field');
            const inputTodoValue = inputTodo.value; 

            //Retriving the dueDate user entered and storing it.
            const dueDate = document.querySelector('.js-input-dueDate').value;

            //Hold the inputs temp as a object array
            const tempObj = {
                name:inputTodoValue,
                dueDate:dueDate
            };
            

            //Pushing the user input to the object array
            todoList.push(tempObj);
            
            //Checking if the obj array has the value
            console.log(todoList);


            //Clearing the input fields
            inputTodo.value = '';
            document.querySelector('.js-input-dueDate').value = '';

            //Initiate localstorage process
            addItemsLocalstorage(todoList);
            
        }

        //Storing the values obtained from todoAdd() to local Storage

        function addItemsLocalstorage(arr){
            //converts the array into string and stores it in local storage
            let string = JSON.stringify(arr);
            localStorage.setItem('data',string);

            //Retrives the store data and converts it to a object
            let returnString = localStorage.getItem('data');
            let returnArray = JSON.parse(returnString);

            //Initiate the process to display obj in local storage
            displayTodo(returnArray);
        }

        //Displays the todo list inside local storage
        function displayTodo(returnArray){
            //Stores the user input with html tags
            let todoListHTML = '';

            //Iterate through the object
            for(let i = 0;i<returnArray.length;i++){
                //Stores the first object in the obj array
                const todoObj = returnArray[i];

                //Separately stores name and dueDate in variables
                const {name,dueDate} = todoObj;
                
                const todoHTML = 
                `
                <div>
                    ${name}
                </div>
                <div> 
                    ${dueDate} 
                </div>
                <button 
                    class="btn-delete"
                    type="button"
                    onclick=remove(${i});
                    "
                    localStorage
                    displayTodo();
                    "
                        
                    >Delete
                </button>
                `;


                //Above code handles the delete button two

                /*
                Important
                    In each iteration i value will be etched in each delete button.This is how it deletes the specif data only.
                */

                 
                //adds the html added value to the variable
                todoListHTML += todoHTML;
            }

            //displays the value inside todoListHTML variable
            document.querySelector('.displayTodo').innerHTML = todoListHTML;
        }

        displayTodo(todoList);


        //removing data from the local storage
        function remove(i){
            todoList.splice(i,1);
            localStorage.setItem('data',JSON.stringify(todoList));

    
            displayTodo(todoList);
        }
