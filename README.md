# Carpool-Guardian-2.0

The purpose of this application is to leverage facial recognition software to identify approved guardians in a family to pick up students from schools. The application would not only verify the pickup person but would facilitate improved operational flow thus expediting the pickup process and giving teachers and parents more time to spend with their kids instead of waiting in line.

The application works by setting providing the user with 2 choices at sign up. That of a teacher or a guardian. The user inputs all appropriate data into the required fields and hits save (No error handling is present in the current version but this is being built and the states for this already exist). This will populate the database with the user info. 
If the user wishes to be part of an existing family they must enter that families name. This will then insert their record into that family and associate them with all children in that family. In the future there will be a detailed approval process where all current guardians in that family must approve any new member wishing to be added.  
If teacher is selected then the teacher must be associated with a school (this is currently done via signup but this will also need a detailed approval process). This will then allow the teacher to select cones. The cones are pickup points for parents (IE Cone 1, Cone 2 etc) to which they will be directed by the program to pickup their kids. The teach will receive an alert for the Guardian with the current picture taken which will include a match % (Red <60, Yellow 61-85, and Green >85) . If red the guardian will not be allowed to pick up the child. In addition the teacher will be notified which children are cleared to leave with that guardian. If the guardian is yellow the teacher can visually verify and still allow the children to leave with that guardian. If green no inspection is necessary. Clicking the button to advance the driver means the children have been approved for pick and advances the next driver in the queue to the first open cone to retrieve their child. As the queue forms teachers can begin staging children at specific markers tied to cones to further enhance the operational effectiveness of the process. This should save the schools money as less time will be needed for this process and save families time.

Teachers can setup new schools which are a requirement to setup teachers and facilitate pickup and cones designation
	Cone Designation is a number
Updates forth coming
	Error handling
	Approval for guardians and teacher
