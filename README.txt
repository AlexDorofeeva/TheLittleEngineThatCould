# thelittleenginethatcould
Workflow: Team members Work Locally & Push Branches, Team leader Merge!!!
Team members:
✅ Clone the repo
✅ Create their own branch
✅ Solve the homework
✅ Push their branch

Team leader:
✅ Pull their branches
✅ Merge them into main
✅ Push the final version

🔄steps for Team members:

Clone the Repository (First Time)
1️⃣Team members run this in the VS Code terminal:

                git clone https://github.com/AlexDorofeeva/TheLittleEngineThatCould.git 

‼️ if you cloned it, just pull the updates:  git pull 
                 
   
                cd "js homework team" ‼️ do your changes in folder homework5


2️⃣ Create a Team member Branch
Each Team member work on main branch:

                git checkout main

                git checkout ‼️ can check what branch you on


3️⃣ Solve the Homework
Team members add the JavaScript file(s) to the homework5 folder.
🔹example: alex.js

4️⃣ Commit & Push Their Work

                git add .

                git commit -m "Added solution by Team member-name"

🔹example: git commit -m "Added solution by Alex"

                git push origin main    
           or:  git push


✅That’s it! Their branch is now in GitHub, but they don’t have to open GitHub at all.
