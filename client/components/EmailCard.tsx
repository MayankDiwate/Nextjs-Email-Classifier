const EmailCard = ({ email }: { email: { title: string; body: string } }) => {
  return (
    <div className="w-full h-20 border rounded-md border-gray-600 p-3 hover:bg-slate-50 cursor-pointer">
      <div className="text-lg font-bold">{email.title}</div>
      <p className="text-sm">{email.body}</p>
    </div>
  );
};

export default EmailCard;
