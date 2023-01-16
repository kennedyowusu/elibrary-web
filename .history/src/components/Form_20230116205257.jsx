import Button from './Button';
import InputType from './InputType';

// eslint-disable-next-line react/prop-types
const Form = ({ title }) => (
  <form action="" className="flex flex-col gap-4"
  onSubmit={handleSubmit}
  >
    <InputType
      className="p-2 rounded border mt-8"
      type="email"
      name="email"
      placeholder="Email Address"
    />

    <InputType
      className="p-2 rounded border"
      type="password"
      name="password"
      placeholder="Password"
    />

    {/* <Link to='/dashboard' />  */}
    <Button
      title={title}
      type="submit"
      className="bg-[#317773] text-white px-4 py-2 rounded-md mt-4 font-bold"
    />
  </form>
);

export default Form;
