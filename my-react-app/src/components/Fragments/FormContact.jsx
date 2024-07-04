import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormContact = () => {
    return (
        <form action="">
            <InputForm
            label="Nama"
            type="name"
            placeholder="example@mail.com"
            name="name"
          />
          <InputForm
            label="Email"
            type="email"
            placeholder="example@mail.com"
            name="email"
          />
          <InputForm
            label="Message"
            type="text"
            placeholder="Your message"
            name="Message"
          />
          <Button classname="bg-blue-600 w-full">Send Message</Button>
        </form>
    );
};

export default FormContact;