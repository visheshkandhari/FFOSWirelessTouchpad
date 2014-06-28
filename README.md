#README

This is the client Firefox OS application of the Wireless TouchPad.

This application was developed as a part of the Firefox OS hackathon in IIT Bombay held on 25-26 June, 2014. 

We originally intented to use the Firefox OS TCP Socket API for setting up a TCP connection to the server application. However we could not get it to work. The TCP Socket was failing to open. So as a workaround, we implemented the application to make AJAX GET calls to the server application for every mouse event and every new position that the cursor is moved to. 

This implementation is certainly not an efficient way of dong things. We are working on using some other API like WebSocket API for this.

NOTE: Both the server and client machines should be connected to the same wireless network. Because of the multiple AJAX GET calls there may be considerable lags in the muse movement according to the network traffic. We are working on an alternate solution for reducing this lag.