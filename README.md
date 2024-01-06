How to install Linux on Windows with WSL

Url : https://learn.microsoft.com/en-us/windows/wsl/install  => in order to  install a linux subsystem to run redis-cli/server.


Steps:


1. Open Powershell & type this command: wsl --install
2. Once installed , restart your machine to get everything insatlled. if you have windows 11 installed , the cpu virtulisation is done already. For prev window's version , Google how to enable cpu virtulisation
3. Type run & type wsl for opening linux terminal
4. sudo apt-get update
5. sudo add-apt-repository universe
6. sudo apt-get install redis


How to open redis cli : 
1. Use run & type wsl.
2. Run redis server with this command : redis-server --port 8000
3. Open run & type wsl again to open a new terminal .
4. Type redis-cli -p 8000 to open up a new terminal for testing redis operation.
5. Check below command to see if it gives expected output.

set myVal 1
OK.
get myVal
"1"

NOte : To get the active ports : use this command : ps -ef | grep redis
to stop a process : use : Kill -15 <Mapping id - get this after above command execution>

use sudo if it gives some error.

