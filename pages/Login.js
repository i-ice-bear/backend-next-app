import { Input, Spacer } from "@nextui-org/react";
import React from "react";
import { useInput, Button, Checkbox } from "@nextui-org/react";

const LoginComponent = () => {
  const { value, reset, bindings } = useInput();

  const validateEmail = () => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);

  return (
    <>
      <div class="container my-5">
        <fieldset class="mb-3 row">
          <legend class="col-form-legend col-4">Login now</legend>
          <div class="col-8">Enter your information given below. </div>
        </fieldset>
        <form>
          <div class="mb-3 row">
            <label for="inputName" class="col-4 col-form-label">
              Name
            </label>
            <div class="col-8">
              <Input
                fullWidth
                hoverable
                placeholder="Enter your name"
                width="full"
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputName" class="col-4 col-form-label">
              Email
            </label>
            <div class="col-8">
              <Input
                {...bindings}
                clearable
                shadow={false}
                onClearClick={reset}
                status={helper.color}
                color={helper.color}
                helperColor={helper.color}
                helperText={helper.text}
                type="email"
                placeholder="Enter your email"
                fullWidth
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputName" class="col-4 col-form-label">
              Username if you have
            </label>
            <div class="col-8">
              <Input
                labelLeft="username"
                fullWidth
                placeholder="ex. username@acme"
                hoverable
              />
            </div>
          </div>

          <div class="mb-3 row">
            <label for="inputName" class="col-4 col-form-label">
              Your Date of birth
            </label>
            <div class="col-8">
              <Input
                labelLeft="Year"
                placeholder="ex. username@acme"
                fullWidth
                hoverable
              />
            </div>
          </div>

          <fieldset class="mb-3 row">
            <label class="col-form-legend col-4">Or using. </label>
            <div class="col-8">
              <Checkbox isRounded={true} size="sm" defaultChecked={true}>
                Google
              </Checkbox>
              <span className="mx-3">
                <Checkbox
                  isRounded={true}
                  size="sm"
                  color="secondary"
                  defaultChecked={true}
                >
                  Instagram
                </Checkbox>
              </span>
              <span className="mx-3">
                <Checkbox
                  isRounded={true}
                  size="sm"
                  color="error"
                  defaultChecked={true}
                >
                  Facebook
                </Checkbox>
              </span>
            </div>
          </fieldset>

          <div class="mb-3 row">
            <div class="offset-sm-4 col-sm-8">
              <Button type="submit" color="primary">
                Login now
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
