import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupInstructions from './Signupinstructions';

const Signup = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  return (
    <div>
      <form className="flex justify-center h-screen w-screen mx-auto max-w-md flex-col gap-2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput 
            id="password2" 
            type="password" 
            required 
            shadow 
            onFocus={() => setShowInstructions(true)}
          />
          {showInstructions && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
              <SignupInstructions />
            </div>
          )}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link to="/terms" className="text-red-600 hover:underline">
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button type="submit" className="bg-red-600 hover:bg-red-700">
          Register new account
        </Button>
      </form>
    </div>
  );
};

export default Signup;
