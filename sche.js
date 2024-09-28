const hospitalsData = `Hospital Name: Apollo Hospital
City: Chennai
Address: 123, Main Street, Chennai
Contact: 1234567890
Doctors:

Name: Dr. John Doe
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Jane Smith
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Emily Johnson
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Robert Brown
Education: MBBS, MD (Oncology)
Specialization: Oncologist
Name: Dr. Linda Davis
Education: MBBS, MD (General Practice)
Specialization: General Practitioner
Name: Dr. Michael Wilson
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
---
Hospital Name: Fortis Malar Hospital
City: Chennai
Address: 456, Malar Avenue, Chennai
Contact: 0987654321
Doctors:

Name: Dr. Sarah White
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. David Green
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterologist
Name: Dr. Rachel Black
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. William Jones
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Jessica Taylor
Education: MBBS, MD (General Practice)
Specialization: General Practitioner
---
Hospital Name: Sri Ramachandra Medical Center
City: Chennai
Address: 789, Kottur Gardens, Chennai
Contact: 1122334455
Doctors:

Name: Dr. Kevin Martin
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Jennifer Lee
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
Name: Dr. Thomas Hall
Education: MBBS, MD (Urology)
Specialization: Urologist
Name: Dr. Elizabeth Allen
Education: MBBS, MD (Anesthesiology)
Specialization: Anesthesiologist
Name: Dr. Steven Young
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Amy King
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
---
Hospital Name: MIOT International
City: Chennai
Address: 150, Mount Road, Chennai
Contact: 2233445566
Doctors:

Name: Dr. Priya Nair
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Arjun Kumar
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Anita Rao
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Ravi Shankar
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Neha Gupta
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Siddharth Reddy
Education: MBBS, MD (Neurosurgery)
Specialization: Neurosurgeon
---
Hospital Name: Billroth Hospital
City: Chennai
Address: 19, Kotturpuram, Chennai
Contact: 5566778899
Doctors:

Name: Dr. Sanjay Menon
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Sneha Das
Education: MBBS, MD (Radiology)
Specialization: Radiologist
Name: Dr. Vijay Kumar
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Ranjitha Lakshmi
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Ashwin Iyer
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Kavitha Subramanian
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
---
Hospital Name: Sri Ramachandra Medical College and Research Institute
City: Chennai
Address: 1, Ramachandra Nagar, Chennai
Contact: 9988776655
Doctors:

Name: Dr. Mohan Babu
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
Name: Dr. Geeta Prasad
Education: MBBS, MD (General Practice)
Specialization: General Practitioner
Name: Dr. Kumar Raja
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Neelima Reddy
Education: MBBS, MD (Anesthesiology)
Specialization: Anesthesiologist
Name: Dr. Lakshmi Narayan
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Vikas Sharma
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
---
Hospital Name: Government General Hospital
City: Chennai
Address: 1, Sardar Patel Road, Chennai
Contact: 2345678901
Doctors:

Name: Dr. Manikandan
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Priya Mohan
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Arul Raj
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
Name: Dr. Radha Kannan
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Subramanian
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Kalpana Suresh
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
---
Hospital Name: Vellore Christian Medical College
City: Vellore
Address: 1, Ida Scudder Road, Vellore
Contact: 3456789012
Doctors:

Name: Dr. Rachel Joy
Education: MBBS, MD (Neurosurgery)
Specialization: Neurosurgeon
Name: Dr. Samuel Abraham
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Anjali Singh
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
Name: Dr. Karthik Nair
Education: MBBS, MD (General Practice)
Specialization: General Practitioner
Name: Dr. Vinayak Reddy
Education: MBBS, MD (Radiology)
Specialization: Radiologist
Name: Dr. Lavanya Desai
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
---
Hospital Name: KMC Hospital
City: Coimbatore
Address: 123, Avinashi Road, Coimbatore
Contact: 4567890123
Doctors:

Name: Dr. Aditya Menon
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Bhuvaneshwari
Education: MBBS, MD (Gynecology)
Specialization: Gynecologist
Name: Dr. Ramesh Babu
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Santhosh Kumar
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Meenakshi Sundaram
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Prashanth Reddy
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Ranjani Kumar
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
---
Hospital Name: Manipal Hospital
City: Salem
Address: 789, Omalur Road, Salem
Contact: 5678901234
Doctors:

Name: Dr. Hariharan
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Gopalakrishnan
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Vasudevan
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Aarti Jain
Education: MBBS, MD (General Practice)
Specialization: General Practitioner
Name: Dr. Chandran
Education: MBBS, MD (Anesthesiology)
Specialization: Anesthesiologist
Name: Dr. Priya Nandakumar
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterologist
---
Hospital Name: Madras Medical Mission
City: Chennai
Address: 4, Anna Nagar, Chennai
Contact: 8765432100
Doctors:

Name: Dr. Ashok Kumar
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Malathi Raj
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
Name: Dr. Pradeep Singh
Education: MBBS, MD (Neurosurgery)
Specialization: Neurosurgeon
Name: Dr. Gayathri Ramesh
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
Name: Dr. Rajesh Kumar
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Lavanya Iyer
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
---
Hospital Name: Global Health City
City: Chennai
Address: 1, Perumbakkam, Chennai
Contact: 9675301234
Doctors:

Name: Dr. Vivek Menon
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
Name: Dr. Indira Gandhi
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Ganesh Sundaram
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Akshay Reddy
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Pooja Nair
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Lakshmi Ramakrishnan
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
---
Hospital Name: SRM Hospital
City: Chennai
Address: 123, Kattankulathur, Chennai
Contact: 8432109876
Doctors:

Name: Dr. Mohan Raj
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterologist
Name: Dr. Reshma Verma
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
Name: Dr. Senthil Kumar
Education: MBBS, MD (General Practice)
Specialization: General Practitioner
Name: Dr. Rekha Sharma
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Nitin Singh
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Karthik Ayyappan
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
---
Hospital Name: Kaveri Hospital
City: Trichy
Address: 45, Kaveri Nagar, Trichy
Contact: 9876543210
Doctors:

Name: Dr. Arjun Ravi
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Sudha Prasad
Education: MBBS, MD (Anesthesiology)
Specialization: Anesthesiologist
Name: Dr. Manish Gupta
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
Name: Dr. Priya Ramachandran
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Vikram Desai
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Anand Suresh
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
---
Hospital Name: PSG Hospital
City: Coimbatore
Address: 75, Peelamedu, Coimbatore
Contact: 7654321098
Doctors:

Name: Dr. Balan Muthu
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterologist
Name: Dr. Sangeetha Raj
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
Name: Dr. Yashwant Reddy
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Anjali Sharma
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Pranav Kumar
Education: MBBS, MD (Neurosurgery)
Specialization: Neurosurgeon
Name: Dr. Riya Nair
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
---
Hospital Name: Vinayaka Mission Medical College
City: Salem
Address: 11, Mettur Road, Salem
Contact: 6543210987
Doctors:

Name: Dr. Pavan Kumar
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Sneha Iyer
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Karthik Iyer
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Chaitanya Rao
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Preethi Balakrishnan
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
Name: Dr. Abhishek Kumar
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
---
Hospital Name: Tirunelveli Medical College
City: Tirunelveli
Address: 45, Pottapalayam, Tirunelveli
Contact: 3210987654
Doctors:

Name: Dr. Ramesh Balaji
Education: MBBS, MD (Internal Medicine)
Specialization: Internist
Name: Dr. Hema Rani
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterologist
Name: Dr. Tharun Raj
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
Name: Dr. Lakshman
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Suman Reddy
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Priyanka Rao
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
---
Hospital Name: Chettinad Health City
City: Chennai
Address: 45, Kelambakkam, Chennai
Contact: 2345678900
Doctors:

Name: Dr. Vijayalakshmi
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Mohit Nair
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Karthik Babu
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Divya Ramesh
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Harish Kumar
Education: MBBS, MD (Anesthesiology)
Specialization: Anesthesiologist
Name: Dr. Ranjani Pillai
Education: MBBS, MD (Psychiatry)
Specialization: Psychiatrist
---
Hospital Name: JIPMER
City: Puducherry
Address: Dhanvantri Nagar, Puducherry
Contact: 2987654321
Doctors:

Name: Dr. Abhinav
Education: MBBS, MD (Neurosurgery)
Specialization: Neurosurgeon
Name: Dr. Geeta Mehta
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Kiran Rao
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Rahul Sharma
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Sneha Nair
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterology
---
Hospital Name: Billroth Hospitals
City: Chennai
Address: 43, Lakshmi Talkies Road, Shenoy Nagar, Chennai
Contact: 044-42921777
Doctors:

Name: Dr. Raghavan S
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Ashwini Kumar
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Vaishnavi S
Education: MBBS, MD (Nephrology)
Specialization: Nephrologist
Name: Dr. Aravind Kumar
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Rekha Reddy
Education: MBBS, MD (Gynecology)
Specialization: Gynecologist
---
Hospital Name: Vijaya Hospital
City: Chennai
Address: 180, NSK Salai, Vadapalani, Chennai
Contact: 044-66661234
Doctors:

Name: Dr. Nirmala Devi
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Murali Krishna
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Karthik M
Education: MBBS, MD (Oncology)
Specialization: Oncologist
Name: Dr. Anitha Raj
Education: MBBS, MS (Ophthalmology)
Specialization: Ophthalmologist
Name: Dr. Srikanth R
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
---
Hospital Name: SRM Medical College Hospital
City: Kattankulathur
Address: Potheri, Kattankulathur, Chennai
Contact: 044-47432345
Doctors:

Name: Dr. Rajkumar V
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Priyanka S
Education: MBBS, MD (Gynecology)
Specialization: Gynecologist
Name: Dr. Rohit Kumar
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
Name: Dr. Vinoth Prabhu
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Gayathri V
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
---
Hospital Name: Meenakshi Mission Hospital & Research Centre
City: Madurai
Address: Lake Area, Melur Road, Madurai
Contact: 0452-2588741
Doctors:

Name: Dr. Ashok Kumar
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Sudha Ravi
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
Name: Dr. Srinivas Rao
Education: MBBS, MD (Urology)
Specialization: Urologist
Name: Dr. Deepika Raj
Education: MBBS, MD (Radiology)
Specialization: Radiologist
Name: Dr. Manivannan S
Education: MBBS, MD (General Surgery)
Specialization: General Surgeon
---
Hospital Name: PSG Hospitals
City: Coimbatore
Address: Peelamedu, Coimbatore
Contact: 0422-2570170
Doctors:

Name: Dr. Vijay Kumar
Education: MBBS, MD (Gastroenterology)
Specialization: Gastroenterologist
Name: Dr. Sangeetha S
Education: MBBS, MS (Ophthalmology)
Specialization: Ophthalmologist
Name: Dr. Vishnu Priya
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Vasanth Raj
Education: MBBS, MS (ENT)
Specialization: ENT Specialist
Name: Dr. Kavitha Menon
Education: MBBS, MS (Dermatology)
Specialization: Dermatologist
---
Hospital Name: Chettinad Health City
City: Chennai
Address: Rajiv Gandhi Salai, Kelambakkam, Chennai
Contact: 044-47413300
Doctors:

Name: Dr. Anirudh S
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Veena Kumar
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Jayalakshmi S
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Varun R
Education: MBBS, MD (Radiology)
Specialization: Radiologist
Name: Dr. Sudhakar K
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
---
Hospital Name: Madurai Apollo Specialty Hospital
City: Madurai
Address: Lake View Road, K.K. Nagar, Madurai
Contact: 0452-2580890
Doctors:

Name: Dr. Venkatesh R
Education: MBBS, MD (Nephrology)
Specialization: Nephrologist
Name: Dr. Priya Rajendran
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Mahesh Kumar
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Karthik Prasad
Education: MBBS, MS (Oncology)
Specialization: Oncologist
Name: Dr. Shankar R
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
---
Hospital Name: Sri Ramachandra Medical Centre
City: Chennai
Address: 1, Ramachandra Nagar, Porur, Chennai
Contact: 044-24768001
Doctors:

Name: Dr. Balamurugan K
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Hemalatha S
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Sanjay M
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Bhavani N
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Natarajan R
Education: MBBS, MD (General Medicine)
Specialization: General Physician
---
Hospital Name: Stanley Medical College Hospital
City: Chennai
Address: No.1, Old Jail Road, Royapuram, Chennai
Contact: 044-25281350
Doctors:

Name: Dr. Rajesh K
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Saraswathi G
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Sudhakar M
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Prashanth R
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Priya B
Education: MBBS, MD (Gynecology)
Specialization: Gynecologist
---
Hospital Name: Velammal Medical College Hospital
City: Madurai
Address: Velammal Village, Madurai
Contact: 0452-3923800
Doctors:

Name: Dr. Ramachandran S
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Swathi P
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Rajesh S
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Pranav R
Education: MBBS, MS (Neurology)
Specialization: Neurologist
Name: Dr. Madhavi L
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
---
Hospital Name: MGM Healthcare
City: Chennai
Address: 72, Nelson Manickam Road, Aminjikarai, Chennai
Contact: 044-45242424
Doctors:

Name: Dr. Karthik P
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Lavanya R
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Ravi Kumar
Education: MBBS, MS (ENT)
Specialization: ENT Specialist
Name: Dr. Meera J
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Aravind S
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
---
Hospital Name: GKNM Hospital
City: Coimbatore
Address: Nethaji Road, Pappanaickenpalayam, Coimbatore
Contact: 0422-4305000
Doctors:

Name: Dr. Kumar R
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Vijayalakshmi S
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Senthil K
Education: MBBS, MD (Oncology)
Specialization: Oncologist
Name: Dr. Bala S
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Radhika N
Education: MBBS, MD (General Medicine)
Specialization: General Physician
---
Hospital Name: Kovai Medical Center & Hospital
City: Coimbatore
Address: Avinashi Road, Coimbatore
Contact: 0422-4323800
Doctors:

Name: Dr. Ashwin Kumar
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Prakash M
Education: MBBS, MS (Ophthalmology)
Specialization: Ophthalmologist
Name: Dr. Shalini T
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Venkatesh M
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Krishna K
Education: MBBS, MS (General Surgery)
Specialization: General Surgeon
---
Hospital Name: Christian Medical College (CMC)
City: Vellore
Address: IDA Scudder Road, Vellore
Contact: 0416-2281000
Doctors:

Name: Dr. Rahul J
Education: MBBS, MD (Nephrology)
Specialization: Nephrologist
Name: Dr. Swetha S
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
Name: Dr. Vikram R
Education: MBBS, MS (General Surgery)
Specialization: General Surgeon
Name: Dr. Meera G
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Rajesh Kumar
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
---
Hospital Name: MIOT International
City: Chennai
Address: 4/112, Mount Poonamallee Road, Manapakkam, Chennai
Contact: 044-42002288
Doctors:

Name: Dr. Hariharan V
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Anita M
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Ramkumar S
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Priya V
Education: MBBS, MS (ENT)
Specialization: ENT Specialist
Name: Dr. Mohanraj R
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
---
Hospital Name: Madurai Meenakshi Mission Hospital
City: Madurai
Address: Lake Area, Melur Road, Madurai
Contact: 0452-2588741
Doctors:

Name: Dr. Arun B
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Swathi V
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Praveen S
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Kalpana M
Education: MBBS, MS (Ophthalmology)
Specialization: Ophthalmologist
Name: Dr. Srinivas K
Education: MBBS, MD (Neurology)
Specialization: Neurologist
---
Hospital Name: Sree Balaji Medical College & Hospital
City: Chennai
Address: No.7, Works Road, Chromepet, Chennai
Contact: 044-42955555
Doctors:

Name: Dr. Shankar R
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Preethi S
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Vinod Kumar
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Kavitha R
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Arun N
Education: MBBS, MS (ENT)
Specialization: ENT Specialist
---
Hospital Name: Madras Medical Mission Hospital
City: Chennai
Address: 4-A, Dr. J. Jayalalitha Nagar, Mogappair, Chennai
Contact: 044-26565888
Doctors:

Name: Dr. Pankaj R
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Vidhya P
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Karthik R
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Akshaya G
Education: MBBS, MD (Pulmonology)
Specialization: Pulmonologist
Name: Dr. Ramya S
Education: MBBS, MD (Oncology)
Specialization: Oncologist
---
Hospital Name: Global Hospitals
City: Chennai
Address: 439, Cheran Nagar, Perumbakkam, Chennai
Contact: 044-44777000
Doctors:

Name: Dr. Manohar R
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Pavithra N
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Kiran Kumar
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Deepika R
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Vijay K
Education: MBBS, MD (Endocrinology)
Specialization: Endocrinologist
---
Hospital Name: Apollo Speciality Hospitals
City: Trichy
Address: Chennai By-Pass Road, Uyyakondan, Trichy
Contact: 0431-2333333
Doctors:

Name: Dr. Sanjay K
Education: MBBS, MD (Neurology)
Specialization: Neurologist
Name: Dr. Ramya S
Education: MBBS, MS (Gynecology)
Specialization: Gynecologist
Name: Dr. Rohit M
Education: MBBS, MD (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Veeramani S
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Priyanka R
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
---
Hospital Name: Coimbatore Kidney Centre
City: Coimbatore
Address: No.97, Avinashi Road, Coimbatore
Contact: 0422-2245000
Doctors:

Name: Dr. Kumar B
Education: MBBS, MS (Urology)
Specialization: Urologist
Name: Dr. Deepa S
Education: MBBS, MD (Nephrology)
Specialization: Nephrologist
Name: Dr. Anitha K
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Arjun R
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Shruthi N
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
---
Hospital Name: Rajiv Gandhi Government General Hospital
City: Chennai
Address: 21, Kotturpuram, Chennai
Contact: 044-22201370
Doctors:

Name: Dr. Subramanian T
Education: MBBS, MD (General Medicine)
Specialization: General Physician
Name: Dr. Lakshmi R
Education: MBBS, MD (Pediatrics)
Specialization: Pediatrician
Name: Dr. Prakash A
Education: MBBS, MS (Orthopedics)
Specialization: Orthopedic Surgeon
Name: Dr. Nirmala S
Education: MBBS, MD (Obstetrics)
Specialization: Obstetrician
Name: Dr. Ganesh V
Education: MBBS, MD (Surgery)
Specialization: General Surgeon
---
Hospital Name: Government Stanley Medical College and Hospital
City: Chennai
Address: 50, P. S. Sivasamy Salai, Chennai
Contact: 044-25913753
Doctors:

Name: Dr. Venkatesh P
Education: MBBS, MD (Internal Medicine)
Specialization: General Physician
Name: Dr. Deepa S
Education: MBBS, MS (Ophthalmology)
Specialization: Ophthalmologist
Name: Dr. Rajesh K
Education: MBBS, MD (Cardiology)
Specialization: Cardiologist
Name: Dr. Lakshmanan R
Education: MBBS, MD (Dermatology)
Specialization: Dermatologist
Name: Dr. Sujatha M
Education: MBBS, MD (Anesthesiology)
Specialization: Anesthesiologist`;
// Function to process the data
function parseHospitalData(data) {
  const hospitals = [];
  const hospitalEntries = data
    .trim()
    .split("---")
    .map((h) => h.trim());

  hospitalEntries.forEach((entry) => {
    const lines = entry.split("\n");
    let hospital = {
      name: "",
      city: "",
      address: "",
      contact: "",
      doctors: [],
    };

    lines.forEach((line) => {
      if (line.startsWith("Hospital Name:")) {
        hospital.name = line.split("Hospital Name:")[1].trim();
      } else if (line.startsWith("City:")) {
        hospital.city = line.split("City:")[1].trim();
      } else if (line.startsWith("Address:")) {
        hospital.address = line.split("Address:")[1].trim();
      } else if (line.startsWith("Contact:")) {
        hospital.contact = line.split("Contact:")[1].trim();
      } else if (line.startsWith("Name:")) {
        const doctor = {
          name: line.split("Name:")[1].trim(),
          education: "",
          specialization: "",
        };
        hospital.doctors.push(doctor);
      } else if (line.startsWith("Education:")) {
        hospital.doctors[hospital.doctors.length - 1].education = line
          .split("Education:")[1]
          .trim();
      } else if (line.startsWith("Specialization:")) {
        hospital.doctors[hospital.doctors.length - 1].specialization = line
          .split("Specialization:")[1]
          .trim();
      }
    });

    hospitals.push(hospital);
  });

  return hospitals;
}

// Function to render the hospitals on the page
function renderHospitals(hospitals, limit) {
  const hospitalList = document.getElementById("hospitalList");
  hospitalList.innerHTML = ""; // Clear previous content
  hospitals.forEach((hospital, index) => {
    const hiddenClass = index >= limit ? "hidden" : ""; // Hide beyond the limit
    const hospitalCard = `
      <div class="col-md-4 hospital-card ${hiddenClass}">
        <div class="card shadow-sm border-light rounded-9">
          <div class="card-body">
            <h5 class="card-title">${hospital.name}</h5>
            <p class="card-text">City: ${hospital.city}</p>
            <p class="card-text">Contact: ${hospital.contact}</p>
            <button class="btn btn-primary book-btn" data-index="${index}">Book Appointment</button>
          </div>
        </div>
      </div>
    `;
    hospitalList.innerHTML += hospitalCard;
  });
}

// Initialize the page with hospital data, show only 6
const hospitals = parseHospitalData(hospitalsData);
renderHospitals(hospitals, 6);

// View All and View Less functionality
document.getElementById("viewAllBtn").addEventListener("click", () => {
  document
    .querySelectorAll(".hospital-card.hidden")
    .forEach((card) => card.classList.remove("hidden"));
  document.getElementById("viewAllBtn").style.display = "none";
  document.getElementById("viewLessBtn").style.display = "inline-block";
});

document.getElementById("viewLessBtn").addEventListener("click", () => {
  const hospitalCards = document.querySelectorAll(".hospital-card");
  hospitalCards.forEach((card, index) => {
    if (index >= 6) {
      card.classList.add("hidden");
    }
  });
  document.getElementById("viewAllBtn").style.display = "inline-block";
  document.getElementById("viewLessBtn").style.display = "none";
});

// Render doctors in the modal
function renderDoctors(doctors) {
  const doctorList = document.getElementById("doctorList");
  doctorList.innerHTML = ""; // Clear previous content
  doctors.forEach((doctor) => {
    const doctorCard = `
      <div class="card doctor-card">
        <div class="card-body">
          <h5 class="card-title">${doctor.name}</h5>
          <p class="card-text">Education: ${doctor.education}</p>
          <p class="card-text">Specialization: ${doctor.specialization}</p>
          <button class="btn btn-success book-appointment-btn">Book Appointment</button>
        </div>
      </div>
    `;
    doctorList.innerHTML += doctorCard;
  });
}

// Event listener for booking appointment button
document.getElementById("hospitalList").addEventListener("click", (event) => {
  if (event.target.classList.contains("book-btn")) {
    const index = event.target.getAttribute("data-index");
    const doctors = hospitals[index].doctors;
    renderDoctors(doctors);
    $("#doctorModal").modal("show"); // Show the modal
  }
});

// Event listener for booking appointment in doctors
document.getElementById("doctorList").addEventListener("click", (event) => {
  if (event.target.classList.contains("book-appointment-btn")) {
    const doctorName = event.target
      .closest(".card")
      .querySelector(".card-title").innerText;
    document.getElementById("selectedDoctorName").value = doctorName;
    $("#doctorModal").modal("hide");
    $("#appointmentModal").modal("show");
  }
});

// Validation and scheduling logic
function isValidPhoneNumber(phone) {
  const phoneRegex = /^\d{10}$/; // Regex for a 10-digit number
  return phoneRegex.test(phone);
}

document.getElementById("scheduleButton").addEventListener("click", () => {
  const patientName = document.getElementById("patientName").value.trim();
  const patientId = document.getElementById("patientId").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const appointmentDate = document.getElementById("appointmentDate").value;
  const doctorName = document.getElementById("selectedDoctorName").value;

  if (!patientName || !patientId || !phoneNumber || !appointmentDate) {
    alert("Please fill out all fields.");
  } else if (!isValidPhoneNumber(phoneNumber)) {
    alert("Please enter a valid phone number (10 digits).");
  } else {
    alert(`Appointment scheduled with Dr. ${doctorName} on ${appointmentDate}`);
    $("#appointmentModal").modal("hide"); // Hide the modal after scheduling
  }
});

// Function to filter hospitals based on search query, selected city, and selected specialization
function filterHospitals(searchQuery, selectedCity, selectedSpecialization) {
  return hospitals.filter((hospital) => {
    const matchesSearch =
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.city.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCity = selectedCity
      ? hospital.city.toLowerCase() === selectedCity.toLowerCase()
      : true;

    const matchesSpecialization = selectedSpecialization
      ? hospital.doctors.some(
          (doctor) =>
            doctor.specialization.toLowerCase() ===
            selectedSpecialization.toLowerCase()
        )
      : true;

    return matchesSearch && matchesCity && matchesSpecialization;
  });
}

// Render filtered hospitals
function renderFilteredHospitals() {
  const searchQuery = document.getElementById("searchInput").value;
  const selectedCity = document.getElementById("cityFilter").value;
  const selectedSpecialization = document.getElementById(
    "specializationFilter"
  ).value;
  const filteredHospitals = filterHospitals(
    searchQuery,
    selectedCity,
    selectedSpecialization
  );
  renderHospitals(filteredHospitals, 6); // Render filtered hospitals
}

// Event listeners for filtering
document
  .getElementById("searchInput")
  .addEventListener("input", renderFilteredHospitals);
document
  .getElementById("cityFilter")
  .addEventListener("change", renderFilteredHospitals);
document
  .getElementById("specializationFilter")
  .addEventListener("change", renderFilteredHospitals);

// Toggle filter options visibility
const filterButton = document.getElementById("filterButton");
const filterOptions = document.getElementById("filterOptions");

filterButton.addEventListener("click", () => {
  filterOptions.classList.toggle("hidden");
});

// Array to hold booked appointments
let bookedAppointments = [];

// Function to render appointments
function renderAppointments() {
  const appointmentsList = document.getElementById("appointmentsList");
  appointmentsList.innerHTML = ""; // Clear previous content
  if (bookedAppointments.length === 0) {
    appointmentsList.innerHTML = "<p>No appointments booked yet.</p>";
  } else {
    bookedAppointments.forEach((appointment, index) => {
      const appointmentCard = `
        <div class="card appointment-card mb-2">
          <div class="card-body">
            <h5 class="card-title">Appointment with Dr. ${appointment.doctorName}</h5>
            <p class="card-text">Date: ${appointment.date}</p>
            <p class="card-text">Patient Name: ${appointment.patientName}</p>
            <p class="card-text">Patient ID: ${appointment.patientId}</p>
            <p class="card-text">Phone Number: ${appointment.phoneNumber}</p>
            <button class="btn btn-danger cancel-btn" data-index="${index}">Cancel</button>
            <button class="btn btn-secondary change-btn" data-index="${index}">Change Date/Time</button>
          </div>
        </div>
      `;
      appointmentsList.innerHTML += appointmentCard;
    });
  }
}

// Update the scheduling logic to save appointments
document.getElementById("scheduleButton").addEventListener("click", () => {
  const patientName = document.getElementById("patientName").value.trim();
  const patientId = document.getElementById("patientId").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const appointmentDate = document.getElementById("appointmentDate").value;
  const doctorName = document.getElementById("selectedDoctorName").value;

  if (!patientName || !patientId || !phoneNumber || !appointmentDate) {
    alert("Please fill out all fields.");
  } else if (!isValidPhoneNumber(phoneNumber)) {
    alert("Please enter a valid phone number (10 digits).");
  } else {
    // Save the appointment to the bookedAppointments array
    bookedAppointments.push({
      patientName,
      patientId,
      phoneNumber,
      date: appointmentDate,
      doctorName,
    });

    $("#appointmentModal").modal("hide"); // Hide the modal after scheduling
    renderAppointments(); // Update the appointments view
  }
});

// Event listener for canceling an appointment
document
  .getElementById("appointmentsList")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("cancel-btn")) {
      const index = event.target.getAttribute("data-index");
      bookedAppointments.splice(index, 1); // Remove the appointment
      renderAppointments(); // Update the appointments view
      alert("Appointment canceled.");
    }
  });

// Event listener for changing an appointment date/time
document
  .getElementById("appointmentsList")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("change-btn")) {
      const index = event.target.getAttribute("data-index");
      const newDate = prompt("Enter new appointment date (YYYY-MM-DD):");

      if (newDate) {
        bookedAppointments[index].date = newDate; // Update the appointment date
        renderAppointments(); // Update the appointments view
        alert("Appointment date changed.");
      }
    }
  });

// Call renderAppointments initially to show existing appointments (if any)
renderAppointments();
