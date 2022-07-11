import ComplaintForm from '../components/ComplaintForm';

function Complaint() {
  return (
    <div>
      <section className="heading">
        <p>Fill in the form below to file a Complaint</p>
      </section>

      <ComplaintForm />
    </div>
  );
}

export default Complaint;
