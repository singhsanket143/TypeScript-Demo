/**
 * ENUNS or Enumeration
 * const INITIALSED = "initialised"
 * Ticket status ["initialised", "cancelled", "resolved", "pending"]
 * 
 * ti.status == "resolved"
 * 
 */

enum TicketStatus {
    INITIALSED = "initialised",
    CANCELLED = "cancelled",
    PENDING = "pending",
    CLOSED = "closed"
}

const Ticket = {
    id: 1,
    title: "new ticket",
    status: TicketStatus.INITIALSED
}
console.log(Ticket);
if(Ticket.status == TicketStatus.CLOSED) {
    console.log("Done")
}

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    Created = 201,
    BadRequest = 400
}

const response = {
    url: "www.something.com",
    type: "GET",
    data: "some string",
    status: StatusCodes.Success
}

console.log(response)
