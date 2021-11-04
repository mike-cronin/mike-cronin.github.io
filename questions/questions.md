*Question 1*  

 
From: marissa@startup.com  
Subject:  Bad design  

Hello,  
  
Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.  
   
Thanks,  
Marissa  

** Response **

Hey Marissa, 

Apologies for the inconvenience that the changes to the dashboard design have caused in your workflow. We certainly understand the frustrations that can come with design changes and appreciate you reaching out to let us know. 

Generally, deleting or clearing an index of data is a risk for our users without ample safeguards in place to confirm the action is intended. I'd like to understand more about your specific use case before I take your feedback to our product team. Let me know if you'd prefer to discuss the issue in more detail on a brief call. 
  
--

*Question 2*:   
  
From: carrie@coffee.com  
Subject: URGENT ISSUE WITH PRODUCTION!!!!  
  
Since today 9:15am we have been seeing a lot of errors on our website. Multiple users have reported that they were unable to publish their feedbacks and that an alert box with "Record is too big, please contact enterprise@algolia.com".  
  
Our website is an imdb like website where users can post reviews of coffee shops online. Along with that we enrich every record with a lot of metadata that is not for search. I am already a paying customer of your service, what else do you need to make your search work?  
  
Please advise on how to fix this. Thanks.   

** Response **
  
Hello Carrie,

The reason you're experiencing this error is due to size limitations set for individual records. The primary reason these are in place is to maintain performance by reducing search latency - larger records can lead to slower results for end users. Currently the maxiumum record size is 100kb for an individual record. 

Since you mentioned having a large amount of metadata, I believe we can guide you towards reducing these errors while maintaining the same quality of search results. As the metadata is not being used for search functionality, we recommend resolving the issue by remove any fields not relevant to search from being sent to Algolia in these records. The other option would be to split the records into smaller sized chunks using the distinct feature which would result in a higher level of effort on your end, but is feasible if the recommended option will not work for you. 

For more information on the record size limits and suggested resolutions you can refer to our documentation here: https://support.algolia.com/hc/en-us/articles/4406981897617-Is-there-a-size-limit-for-my-index-records-/



--

*Question 3*:   


From: marc@hotmail.com  
Subject: Error on website  
  
Hi, my website is not working and here's the error:  
  
![error message](./error.png)  
  
Can you fix it please?  

** Response **

Hey Marc,

This error is most commonly caused by a required JavaScript library not loading on your site. The first thing you'll want to check is that all of the JavaScript libraries needed by Algolia are being loaded successfully. 

If you're unable to determine the cause after reviewing your code for any missing dependencies, please provide us with some additional information to aid with troubleshooting: 

 - Code snippet where the error is observed
 - Brief description of any changes that may have been made to the website around the time this error started appearing
 - URL of the website experiencing the issue

Once we have those details we'll be able to take a closer look. We can certainly hop on a call to help work through the issue if you're unable to determine the cause after investigating the library dependencies. 