export default function register (callback)
{
   const X3D = window [Symbol .for ("X_ITE.X3D")];

   if (X3D)
      callback (X3D);
   else
      (window [Symbol .for ("X_ITE.extensions")] ??= [ ]) .push (callback);
};
