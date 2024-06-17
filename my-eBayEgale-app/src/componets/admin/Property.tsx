import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import './Property.css';

const API_URL = 'https://koshi-exception-023-3.onrender.com/newData';

interface Rental {
  id: number;
  location: string;
  type: string;
  price: string;
  rating: string;
  url: string;
}

const Property: React.FC = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rentalsPerPage] = useState<number>(5);
  const [formData, setFormData] = useState({
    location: '',
    type: '',
    price: '',
    rating: '',
    url: ''
  });
  const [editingRentalId, setEditingRentalId] = useState<number | null>(null); // Track which rental is being edited

  useEffect(() => {
    const fetchRentals = async () => {
      try {
        const response = await axios.get<Rental[]>(API_URL);
        setRentals(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchRentals();
  }, []);

  const indexOfLastRental: number = currentPage * rentalsPerPage;
  const indexOfFirstRental: number = indexOfLastRental - rentalsPerPage;
  const currentRentals: Rental[] = rentals.slice(indexOfFirstRental, indexOfLastRental);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  const handleDelete = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRentals(prevRentals => prevRentals.filter(rental => rental.id !== id));
    } catch (error) {
      console.error('Error deleting rental:', error);
    }
  };

  const handleUpdate = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${editingRentalId}`, formData);
      setRentals(prevRentals =>
        prevRentals.map(rental => (rental.id === editingRentalId ? { ...rental, ...formData } : rental))
      );
      setEditingRentalId(null);
      setFormData({
        location: '',
        type: '',
        price: '',
        rating: '',
        url: ''
      });
    } catch (error) {
      console.error('Error updating rental:', error);
    }
  };

  const handleAdd = async (): Promise<void> => {
    try {
      const response = await axios.post<Rental>(API_URL, formData);
      const newRental = response.data;
      setRentals([newRental, ...rentals]);
      setFormData({
        location: '',
        type: '',
        price: '',
        rating: '',
        url: ''
      });
    } catch (error) {
      console.error('Error adding rental:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (id: number): void => {
    setEditingRentalId(id); // Set the id of the rental being edited
    const rentalToEdit = rentals.find(rental => rental.id === id);
    if (rentalToEdit) {
      setFormData({ ...rentalToEdit });
    }
  };

  return (
    <div className="property-container">
      <h1 className="property-heading">Rental List</h1>
      <form className="rental-form" onSubmit={editingRentalId !== null ? handleUpdate : handleAdd}>
        <input
          type="text"
          name="location"
          value={formData.location}
          placeholder="Location"
          onChange={handleChange}
        />
        <input
          type="text"
          name="type"
          value={formData.type}
          placeholder="Type"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="rating"
          value={formData.rating}
          placeholder="Rating"
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          value={formData.url}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit" className="add-rental-button">
          {editingRentalId !== null ? 'Update Rental' : 'Add Rental'}
        </button>
      </form>
      <ul className="rental-list">
        {currentRentals.map(rental => (
          <li key={rental.id} className="rental-item">
            <div className="rental-details">
              <img className="rental-image" src={rental.url} alt={rental.location} />
              <div className="rental-info">
                <h3 className="rental-location">{rental.location}</h3>
                <p className="rental-type">Type: {rental.type}</p>
                <p className="rental-price">Price: {rental.price}</p>
                <p className="rental-rating">Rating: {rental.rating}</p>
                <button className="delete-button" onClick={() => handleDelete(rental.id)}>Delete</button>
                <button className="update-button" onClick={() => handleEdit(rental.id)}>Update</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        rentalsPerPage={rentalsPerPage}
        totalRentals={rentals.length}
        paginate={paginate}
      />
    </div>
  );
};

interface PaginationProps {
  rentalsPerPage: number;
  totalRentals: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ rentalsPerPage, totalRentals, paginate }) => {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalRentals / rentalsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <button className="page-link" onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Property;
