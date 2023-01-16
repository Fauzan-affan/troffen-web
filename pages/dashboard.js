import { signOut, getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: { session },
  };
};

const Dashboard = () => {
  return (
    <div>
      {/* Selamat Datang {session.user.email} */}
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
};

export default Dashboard;
