export const growlResponse = {

	resetVerifiedTrue:{
		severity:'success',
		summary:'Reset password',
		detail:'Please verify to reset password'
	},

	emailNotExists:{
		severity:'error',
		summary:'Email does not exists  error',
		detail:'Please try again with different email'
	},

	serverError:{
		severity:'error',
		summary:'Server error',
		detail:'Please try again'
	},

	registerTrue:{
		severity:'success',
		summary:'Registration Successful',
		detail:'Please verify your email & mobile'
	},

	otpVerifiedTrue:{
		severity:'success',
		summary:'Otp verified',
		detail:''
	},

	loginFalse:{
		severity:'error',
		summary:'Invalid credentials',
		detail:'Please sign up SwastickBookBox'
	},

	success:{
		severity:'success',
		summary:'Success',
		detail:''
	},

	warning:{
		severity:'warning',
		summary:'Could Not Process',
		detail:'Please Try Again'
	}
}

export const testIntro = {
	demoTest:`<h3>Demo Tests</h3>
                <p>
                    Our demo tests are designed with an aim to provide you a overview into the tool and features available on Swastick Book Box. It provides you a clear view of what to expect when you sign up for the subjects, whether it is the syllabus/course coverage or the tests set-up.
                </p>
                <h4><u>Understand this Section:</u></h4>
                <ul>
                    <li>Demo test are auto generated and already available for you to take your first step towards understanding Swastick Book Box.</li>
                    <li>You could take Demo test only once without signing up for any subject.</li>
                    <li>There is no time limit to solve the paper. You can leave a test at any point of time and can resume the test from the last submitted question later.</li>
                    <li>You would be required to answer each question in order to move forward to the next question.</li>
                    <li>Results will be displayed only on completion of test. However you may visit results section at a later point in time to view the results, progress made during multiple attempts or performance charts for previously attempted tests.</li>
                </ul>`,

	sampleTest:`<h3>Sample Tests</h3>
                <p>Sample Test helps you to test your proficiency in each subject and allows to understand how well-versed you are in a particular subject. This helps you to know your development areas and improvise them by re- tests and more practice.</p>
                <p>Sample tests are available for different Olympiad Organizations so that students can choose the desired pattern and practice the same.</p>
                <h4><u>Understand This Section: </u></h4>
                <ul>
                    <li>Toolkit provides 10 tests, you can make 3 attempts for each test.</li>
                    <li>Sample tests are designed to prepare you for the Olympiad exam through real life test pattern, hence the entire syllabus is covered in these tests.</li>
                    <li>There is no time limit to solve the paper. You can leave a test at any point of time and can resume the test from the last submitted question later.</li>
                    <li>You would be required to answer each question in order to move forward to the next question.</li>
                    <li>Results will be displayed only on completion of test. However you may visit results section at a later point in time to view the results, progress made during multiple attempts or performance charts for previously attempted tests..</li>
                </ul>
                <h4><u>How To Utilize Sample Test Effectively: </u></h4>
                <ul>
                    <li>Attempt Sample Tests only when you have studied the entire syllabus and attempted all the available chapter tests for the subject at least once.</li>
                    <li>Review your conceptual understanding immediately after attempting test through detailed chapter-wise analysis available under results section, this will help you identify chapters that you should revise and practice more. You could re-attempt chapter-wise tests for identified development areas.</li>
                    <li>Clarify doubts and re-attempt the Sample test to track progress.</li>
                    <li>Analysis progress b/w different attempts or tests before considering chapter to be completed.</li>
                </ul>
                <h4><u>Advantage Of Sample Test: </u></h4>
                <ul>
                    <li>You can evaluate your readiness for Olympiad exams by attempting sample tests and reviewing your performance vis-à- vis other students.</li>
                </ul>`,

	mockTest:`<h3>Mock Tests</h3>
                <p>Even if students have very good command over the subject, they still need practice in a real-time environment to gauge their actual performance where factors like exam pressure and time management play a very important role. With Olympiad Tool Kit, students can take mock tests to test their real potential.
                </p>
                <h4><u>Understand This Section: </u></h4>
                <ul>
                    <li>Toolkit provides 3 mock tests for each subject. You would be asked to choose the slot when you wish to take the test against the available 2 slots for each test. Tests will be enabled only during the selected time slot and would not be available at any other point in time.</li>
                    <li>In case you miss to attempt the test during first available time-slot, you will be allowed to take test at another available time. In case if you miss to take the test during this slot as well, you’ll not have option to take the test again.</li>
                    <li>You would be required to answer each question in order to move forward to the next question.</li>
                    <li>Mock tests are time bound unlike chapter-wise or sample tests. Each mock test would end as soon as the slot for test is over.</li>
                    <li>Mock tests have to be completed in one go during the scheduled slot itself. If you leave the mock test in between, you will not be able to resume the test. No re-attempts are available for Mock tests.
                    </li>
                    <li>Results will be calculated on percentile basis and will be displayed after all the students have attempted the Mock tests during either of the available slots.</li>
                </ul>
                <h4><u>How To Utilize Mock Test Effectively: </u></h4>
                <ul>
                    <li>Mock test should be attempted within 2 weeks just before final Olympiad exam.</li>
                    <li>Utilize chapter-wise analysis available along with percentile score to identify chapters you need to revise before final Olympiad exam.</li>
                </ul>
                <h4><u>Advantages Of Mock Test: </u></h4>
                <ul>
                    <li>Experience actual exam environment.</li>
                    <li>Helps improving time management skills and Boosts your confidence.</li>
                    <li>Helps you understand your performance vis-à- vis other students.</li>
                    <li>Don’t just feel but be prepared for the exam.</li>
                </ul>`,

	chapterwiseTest:`<h3>Chapter-wise Tests</h3>
                    <p>Chapter-wise tests helps you evaluate your conceptual understating of the chapter and help identify the strength areas and the areas that you need to focus to develop holistic understand of the chapter.</p>
                    <h4><u>Understand This Section: </u></h4>
                    <ul>
                        <li>To generate tests, select chapter from syllabus section and click on GENERATE button.</li>
                        <li>Each chapter contains 5 tests with 15 questions in each test. So, if subject syllabus has 10 chapters, toolkit will contain 50 tests with 15 questions in each test.</li>
                        <li>You can make 3 attempts for each test.</li>
                        <li>There is no time limit to solve the paper. You can leave a test at any point of time and can resume the test from the last submitted question later.</li>
                        <li>You have to answer each question in order to move forward to the next question.</li>
                        <li>Results will be displayed only on completion of test. However you may visit results section at a later point in time to view the results, progress made during multiple attempts or performance charts for previously attempted tests.</li>
                    </ul>
                    <h4><u>How To Utilize Chapter-wise Test Effectively: </u></h4>
                    <ul>
                        <li>Attempt test within 2-3 days after completing the study of a chapter.</li>
                        <li>Review your conceptual understanding immediately after attempting test.</li>
                        <li>Clarify doubts and re-attempt the test to track progress.</li>
                        <li>Analysis progress b/w different attempts or tests before considering chapter to be completed.</li>
                    </ul>
                    <h4><u>Advantage Of Chapter-wise Test: </u></h4>
                    <ul>
                        <li>Chapter-wise tests allow dedicated focus on strengthening your basics for each chapter. It also helps you to practice individual chapter in case sample or Mock tests result analysis indicate the need of further practicing a particular chapter.</li>
                    </ul>`,
}

