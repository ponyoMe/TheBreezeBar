import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests?: string;
};

export default function ReservationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Reservation Data:', data);
    alert('Reservation submitted successfully!');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[400px] p-4 shadow-md rounded-md border">
      <h2 className="text-xl font-bold mb-4">Reserve a Table</h2>

      <div>
        <label className="block">Name *</label>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

    
      <div>
        <label className="block">Phone *</label>
        <input
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\d{11}$/,
              message: 'Invalid phone number',
            },
          })}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>

      
      
      <div>
        <label className="block">Date *</label>
        <input
          type="date"
          {...register('date', {
            required: 'Date is required',
            validate: value => value >= today || 'Date must be in the future',
          })}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.date && <p className="text-red-500">{errors.date.message}</p>}
      </div>

    
      <div>
        <label className="block">Time *</label>
        <input
          type="time"
          {...register('time', { required: 'Time is required' })}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.time && <p className="text-red-500">{errors.time.message}</p>}
      </div>

      <div>
        <label className="block">Number of Guests *</label>
        <input
          type="number"
          {...register('guests', {
            required: 'Number of guests is required',
            min: { value: 1, message: 'At least 1 guest is required' },
          })}
          className="w-full border px-2 py-1 rounded"
        />
        {errors.guests && <p className="text-red-500">{errors.guests.message}</p>}
      </div>

      <div>
        <label className="block">Special Requests</label>
        <textarea
          {...register('requests')}
          className="w-full border px-2 py-1 rounded"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit Reservation
      </button>
    </form>
  );
}
