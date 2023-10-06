// Components/BidForm.js

function BidForm({ product }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit bid price
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="bidPrice">Bid Price:</label>
      <input 
        id="bidPrice"
        name="bidPrice"
        placeholder="Enter your bid price"
        aria-label="Enter your bid price" 
      />
      <button type="submit">Place bid</button>
    </form>
  )
}