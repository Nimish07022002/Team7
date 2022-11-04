# <div align="center">**AIRPORT Flight Control Simulator**</div>

## <div align="center">**Specification Document**</div>

### <div align="center"> <br/>**Team: ARMOUR** &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; **Date: 01/11/2022**</div>

<br/>

### **Team Members:**
* Nimish Suri
* Sree Vagdevi Kandukuri
* Pardarshee Priya
* Abhay Ojha
* Akarsh Roy
* Kumar Gaurav

<br/>

## <ins>**PROJECT DEFINITION :**<ins/>
<p>According to different statistics, landing a flight without any conditional basis led to much traffic and collisions. To avoid such circumstances, airplanes have more priority keeping a few constraints with respect to real life, the plane landing is done smoothly. <br/> <br/>
The concept of Airport flight control system/simulator, here organizes and regulates the process of landing aircraft at an airport. The system has a holding pattern, where aircraft 1st appears when they intend to land. From the holding pattern, aircraft can be instructed to move to the final approach corridor, where they will then land.</p>

<br/>

## <ins>**A number of instructions can be issued to aircraft :**<ins/>
1. Promote from holding pattern to final approach
2. Demote from final approach to holding pattern
3. Emergency promote to front of final approach
4. (From final approach) Abort landing, return to back of final approach
5. Redirect to another airport
 
6. The holding pattern and final approach corridor can only support a certain number of aircraft before the flight lanes become overcrowded and collisions are certain.
7. Each aircraft has a finite amount of fuel, they must have enough fuel to move from one stage of the traffic control system to the other to land safely, otherwise they will crash.
8. Planes must carry a minimum amount of fuel before they can safely land.

<br/>

## <ins>**How is it different from other simulators :**<ins/>
<p>There is a similar product already available known as ATC-SIM( WEB BASED AIR TRAFFIC CONTROL SIMULATOR). It does not allow manual input for planes as well as does not consider emergency cases, further existing systems do not consider fuel as a parameter whereas our system will allow users to give manual inputs, handle emergency cases and it considers fuel as a parameter for priority of landing.</p>

<br/>

## <ins>**Intended users :**<ins/>
<p>The purpose of this ATC simulator is to assist air traffic controllers for safe landing.</p>

<br/>

## <ins>**Success Metrics :**<ins/>
### <ins>**Success :**<ins/>
1. Users are able to visualize real-time air traffic control.
2. Simulator works perfectly for any random input.
3. Minimum plane crashes i.e crashes only if it can’t be saved under any
circumstances.
### <ins>**Failure :**<ins/>
1. If any of the success metrics fails.

<br/>

## <ins>**Future Extensions :**<ins/>
1. Simulations of aircrafts taking off from the same runway.
2. Adding more real-life conditions such as wind speed and weather.
3. Admin page to configure multiple runways and add a new type of plane.

<br/>

## <ins>**FUNCTIONAL SPECIFICATIONS :**<ins/>
#### <p>Let's suppose, </p>
1. Flight **BOE114** has **20000 gallons** of fuel and still has to fly for a time period of **10 hours** whereas, it requires **36000 gallons** to fly for **10 hours.** And on the other side flight **BOE22** has **35000 gallons** for the same period of time. And so the flight with **less fuel** has to be landed safely.
2. Ram is flying to Chandigarh in Indigo and needs a **medical emergency landing** in Delhi. Captain then signals for emergency landing and the same will be performed.
3. Plane **BOE114** has some serious faults and needs emergency landing and **BOE22** has fuel equal to minimum fuel required for landing and it also requests for emergency landing. In this case, none of them can be directed to another airport and since we have a single runway either of them will crash on the basis of first come first served.
4. Plane **BOE114** asks permission for emergency landing and the holding area is already overcrowded but plane **BOE22** has enough fuel such that it can be redirected to another airport. In this case, Plane BOE22 will be redirected to another airport and Plane **BOE114** will be allowed for emergency landing.
5. Plane **BOE114** has enough fuel but it has been granted permission for proceeding toward final approach according to its turn but another Plane **BOE22** asks for emergency landing. Here Plane **BOE114** will be instructed to abort landing and return to the back of final approach and Plane **BOE22** will be given priority.
6. Plane **BOE114** does not have even a minimum amount of fuel for landing . In this case nothing can be done and unfortunately plane has to crash.

<br/>

### **Our simulator has following major features :**
### Application consists of two types of simulator :-
#### 1. Automatic Simulator
* At a random amount of time, random planes are generated with all random specifications.
* The system automatically starts simulation and shows data for different possible cases of landing from time to time.
#### 2. Manual Simulator
* Users can create their own scenarios by providing inputs such as
number of planes, type of plane(jet planes, passenger airplane,
helicopter), amount of fuel and distance.
* Users can also select if a plane has an emergency or not.

## <ins>**EXTERNAL SPECIFICATION :**<ins/>
<p>HTTP is used for client server communication.</p>





