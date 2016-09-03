<?php
	if(isset($_POST['submit'])) { /* Form Submit Button Name Should Be Here */
	
		/* All the form fields should be here, name of the field should be between $_POST['HERE']; */
		$name = htmlspecialchars($_POST['name']);
		$email = htmlspecialchars($_POST['email']);
		$phone = htmlspecialchars($_POST['phone']);
		$message = htmlspecialchars($_POST['message']);
		
		$to      = 'mail@egss.co.uk'; /* Email ID of the receiver */
		$subject = 'Website Enquiry'; /* Email Subject*/
		
		/* Email Message Body, If you want to add any field than copy paste the line below
			$fullmessage .= 'Message : '.$message."\r\n"; 
			
			and replace the $message with the field name
		*/
		$fullmessage = 'Name : '.$name."\r\n";
		$fullmessage .= 'Email : '.$email."\r\n";
		$fullmessage .= 'Phone : '.$phone."\r\n";
		$fullmessage .= 'Message : '.$message."\r\n";
		
		/* Don't modify anything from here */
		$headers = 'From: '. $email . "\r\n" .
			'Reply-To: '. $email . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
			
			mail($to, $subject, $fullmessage, $headers);
		if(isset($_POST['submit'])) {
			header('Location:http://www.scaffoldersussex.co.uk/thankyou.html');
			exit;
		} 
	}
?>