import React from "react";

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const Container = (props: ContainerProps) => {
  return (
    <div className="py-24 px-8 sm:px-12 md:px-16 lg:px-20">
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
