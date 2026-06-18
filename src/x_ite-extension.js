function register (callback)
{
   const X3D = window [Symbol .for ("X_ITE.X3D")];

   if (X3D)
      callback (X3D);
   else
      getExtensions () .push (callback);
};

function getExtensions ()
{
   const
      _extensions = Symbol .for ("X_ITE.extensions"),
      extensions  = window [_extensions];

   if (Array .isArray (extensions))
      return extensions;

   return window [_extensions] = [ ];
}

export default register;
