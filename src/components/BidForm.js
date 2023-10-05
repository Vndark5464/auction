// Components/BidForm.js

function BidForm({ product }) {

    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit bid price
    }
  
    return (
      <form onSubmit={handleSubmit}>
       <input 
         name="bidPrice"
         placeholder="Enter your bid price" 
       />
       <button type="submit">Place bid</button>
      </form>
    )
  }