import React from "react";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Container = (props: ContainerProps) => {
  return (
    <div className="">
      {props.children}
    </div>
  );
};

const ContainerComponent = (props: any) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

export default ContainerComponent;
