{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red153\green168\blue186;\red30\green32\blue34;\red191\green100\blue38;
\red88\green118\blue71;\red254\green187\blue91;}
{\*\expandedcolortbl;;\cssrgb\c66275\c71765\c77647;\cssrgb\c15686\c16863\c18039;\cssrgb\c80000\c47059\c19608;
\cssrgb\c41569\c52941\c34902;\cssrgb\c100000\c77647\c42745;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs32 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 writeRandomQuote = \cf4 \cb1 \strokec4 function\cf2 \strokec2  () \cb3 \{\
    \cf4 \cb1 \strokec4 let\cf2 \cb3 \strokec2  quotes = [\
    \cf5 \cb1 \strokec5 "Patience is bitter, but its fruit is sweet - Aristotle"\cf2 \cb3 \strokec2 ,\
    \cf5 \cb1 \strokec5 "Difficult things in the world, must have their beginnings in the easy. - Lao Tzu"\cf2 \cb3 \strokec2 ,\
    \cf5 \cb1 \strokec5 "The two most powerful warriors are patience and time. - Leo Tolstoy"\cf2 \cb3 \strokec2 ,\
    \cf5 \cb1 \strokec5 "It is easier to find men who will volunteer to die. Than to find those who are willing to endure pain with patience. - Julius Caesar"\cf2 \cb3 \strokec2 \
  ]\
    \cf4 \cb1 \strokec4 let\cf2 \cb3 \strokec2  rand = \cb1 Math\cb3 .floor(\cb1 Math\cb3 .random()*quotes.length);\
    \cb1 document\cb3 .getElementById(\cf5 \cb1 \strokec5 "quote"\cf2 \cb3 \strokec2 ).innerText = quotes[rand];\
  \}\
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb1 \strokec4 function\cf2 \strokec2  \cf6 \strokec6 copyDate\cf2 \strokec2 () \cb3 \{\
  \cf4 \cb1 \strokec4 let\cf2 \cb3 \strokec2  footer = \cb1 document\cb3 .getElementById(\cf5 \cb1 \strokec5 "copyright"\cf2 \cb3 \strokec2 )\
  \cf4 \cb1 \strokec4 let\cf2 \cb3 \strokec2  copyrightText = \cf5 \cb1 \strokec5 "Copyright [YOUR_NAME] \'a9"\cf2 \cb3 \strokec2  + \cf4 \cb1 \strokec4 new\cf2 \cb3 \strokec2  \cb1 Date\cb3 ().getFullYear()\
  footer.innerText = copyrightText\
\}\
\
copyDate();\
writeRandomQuote();}