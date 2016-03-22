/* GL MATRIX LIBRARY */

// glMatrix v0.9.5
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};
mat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*
g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};
mat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*
v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=
o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};



var gl = null; //webgl para el canvas
var transformaciones = null;
var meshes;
var shaderProgram;

var gestorRecursos;
var engine;

var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var vertexBuffer;
var indexBuffer;


/* --------------- SHADERS ---------------------- */



/* ---------------- LIGHTS ---------------- */


/* ---------------- CANVAS Y SUS ATRIBUTOS ------------ */

function getShader(gl, id){
   var shaderScript, currentChild;
    var content; //contenido del elemento

    shaderScript = document.getElementById(id);

    if(!shaderScript) return null; //no existe el shader

    content = "";
    currentChild = shaderScript.firstChild;

    while(currentChild){
        if(currentChild.nodeType == currentChild.TEXT_NODE){
            content += currentChild.textContent;
        }
        currentChild = currentChild.nextSibling;
    }
    //COMMPROBAR QUE TIPO DE SHADER ES
    var shader;
    if (shaderScript.type == "x-shader/x-fragment")
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    else if (shaderScript.type == "x-shader/x-vertex") 
        shader = gl.createShader(gl.VERTEX_SHADER);
    else
        return null; //desconocido
    

    gl.shaderSource(shader, content);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Ha ocurrido un error al compilar el shader"+gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

function initShaders(){
    var fragmentShader = getShader(gl, "shader-fs");
    var vertexShader = getShader(gl, "shader-vs");


    //Creamos el 'programa' y vinculamos los shaders
    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) alert("Imposible inicializar el shader");
    gl.useProgram(shaderProgram);
 

    //Para la posición de los vertices
    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);       

  /*   shaderProgram.vertexNormalAttribute = gl.getAttribLocation(shaderProgram, "aVertexNormal");
    gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);

   shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);   */

    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");

    //Para los colores en los vertices
    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

}

function initWebGL(canvas){
        gl = null;
        try{
            gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        }catch(e){
            
        }

        if(!gl){
            alert("Imposible inicializar WebGL. Tu navegador no lo soporta.");
            gl = null;
        }
        return gl;
    }
// --------------- FUNCION ON LOAD ----------------- //

function start(){ 
   /* var canvas = document.getElementById("mixeet-canvas");

    gl = initWebGL(canvas); //inicializamos el contexto de canvas
    if (gl){
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Establecer el color base en negro, totalmente opaco
        gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
        gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Limpiar el buffer de color asi como el de profundidad
    }

   // $scope.createBuffer();
    initShaders();
   // $scope.initBuffers();
    //
    //$scope.drawScene(1);*/

    //Para poder cargar las mallas y demás
    engine = new TMotorTAG; //se encarga de inicializar el CANVAS
    gestorRecursos = new TGestorRecursos;

    //Creamos algunas entidades...
    var transLuz = engine.crearTransform();
    var transCamara = engine.crearTransform();
    var transMallas = engine.crearTransform();

    var tluz = engine.crearLuz();
    var tcamara = engine.crearCamara();
    var tmalla = engine.crearMalla('ejemplo.obj');

    transMallas.trasladar(3, 0, 0);
    transMallas.escalar(0.5,0.5,0.5);

    console.log("Nuestra malla: "+tmalla);

    /*Creamos los nodos...*/
    var nodoTransLuz = engine.crearNodo(engine.escena, transLuz);
    var nodoTransCam = engine.crearNodo(engine.escena, transCamara);
    var nodoTransMalla = engine.crearNodo(engine.escena, transMallas);

    var nodoLuz = engine.crearNodo(nodoTransLuz, tluz);
    var nodoCam = engine.crearNodo(nodoTransCam, tcamara);
    var nodoMalla = engine.crearNodo(nodoTransMalla, tmalla);

    //Registrar camara y luces
    engine.registrarCamara(nodoCam);
    var n1 = engine.registrarLuz(nodoLuz);
    console.log("Luces disponibles: "+engine.luces);
   
    engine.setLuzActiva(n1);

    engine.getCamaraActiva();

    for(var i=0; i<gestorRecursos.recursos.length; i++){
        console.log("Entramos en gestor recursos...");
        console.log(gestorRecursos.recursos[i]);
    }

    engine.draw();




}

/* ------ FUNCIONES UTILES --- */

function load(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.addEventListener('load', function() {
        callback(request.responseText);
    });
    request.send();
}

function normalizeNaN(vec) {
    return vec.map(a=> { if (Number.isNaN(a)) a = 0; return a; })
}



function gradToRad(grados){
  return (grados * Math.PI / 180);
}

function setMatrixUniforms() {
    // actualiza las matrices de vista y de proyeccion
    gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}

/* ------------- EL GESTOR DE RECURSOS - MALLA, TEXTURA Y MATERIAL ---------------------- */

/* ------------------- TGESTORRECURSOS ----------------- */

function TGestorRecursos(recs){
	this.recursos   =  []; //variable vector
}

TGestorRecursos.prototype.getRecurso = function(nombre, tipo){
	/*for(var i=0; i<recursos.length; i++){
		if(recursos[i] == nombre){
			return recursos[i];
		}
		else{
			nuevorecurso = new TRecurso();
			nuevorecurso.cargarFichero(nombre);
			recursos.push(nuevorecurso);
			return nuevorecurso;
		}
	}*/
    var recurso;
    var n = -1;
    for(var i in this.recursos){
        if(this.recursos[i].getNombre() == nombre) n = i;
    }

    if(n == -1){
        if(tipo == "malla") recurso = new TRecursoMalla(nombre);
        else if(tipo == "textura") recurso = new TRecursoTextura(nombre);
        else recurso = new TRecursoMaterial(nombre);

        recurso.cargarFichero(nombre);
        this.recursos.push(recurso);
        console.log("Hemos añadido recurso a recursos = "+this.recursos);
        
    }
    else recurso = this.recursos[n];
    return recurso;
}

TGestorRecursos.prototype.termina = function(recurso){
    console.log("-----"+recurso);
    this.recursos.push(recurso);
     console.log("Termina gesto recursos:"+this.recursos);
}

/* ---------------- TRECURSO ------------ */

function TRecurso(nombre){
	this.nombre = nombre;
}

TRecurso.prototype.getNombre = function(){
	return this.nombre;
}

TRecurso.prototype.setNombre = function(nombre){
	this.nombre = nombre;
}

/* --------- T RECURSO MALLA ------------ */

function TRecursoMalla(nombre){
	/*this.vertices = 0;
	this.normales = 0;
	this.texturas = 0;
	this.vertTriangulos = 0;
	this.normTriangulos = 0;
	this.textTriangulos = 0;
	this.nTriangulos = 0;*/
    this.setNombre(nombre);
    //Atributos propios
    this.vertices = new Array();
    this.normales = new Array();
    this.texturas = new Array();
    this.vertTriangulos = 0; //índices de los vértices
    this.normTriangulos = 0;
    this.textTriangulos = 0;
    this.nTriangulos = 0;

    this.vertexBuffer = null;
    this.indexBuffer = null;
    this.normBuffer = null;
}

TRecursoMalla.prototype = new TRecurso;

TRecursoMalla.prototype.cargarFichero = function(src){
    var recurso = this;
    if(src != null){
    	//identificar extension  
    	var elems = src.split(".");
        var ext = elems[elems.length-1];
        var self = this;
        load(src, function(data){
        	var obj;
        	switch(ext){
        		case "obj": //obj = new OBJ.Mesh(data);
                //obj = self.parseOBJ(data);
                            OBJ.downloadMeshes({
                                'test' : 'static/app/graphic-engine/models/'+src,
                            }, handleGeometry(recurso));
                            obj = meshes;
        					break;
        		case "json": obj = self.parseJSON(data);
        					break;
        	}
        	console.log("He cargado el fichero ---"+src);
        	
        });
    }
    else  console.log("ERROR: Fichero no cargado");
}

function handleGeometry(recurso){
    return function(m){
        meshes = m;    
        OBJ.initMeshBuffers(gl, meshes.test);
        console.log(meshes.test);

        recurso.rellenarBuffers(meshes.test);    
    }    
}


TRecursoMalla.prototype.parseJSON = function(data){
	var obj = {};
    try {
        obj = JSON.parse(data);
    } catch (e) {
        console.log(e);
    }
    return obj;
}

TRecursoMalla.prototype.rellenarBuffers = function(m){
    var recurso = this;
	console.log("Rellenando buffers...");
    recurso.vertices = m.vertices;
    recurso.normales = m.vertexNormals;
    recurso.texturas = m.textures;
    //recurso.vertTriangulos = m.i_verts;
   // recurso.normTriangulos = m.i_norms;
   // recurso.textTriangulos = m.i_uvt;

    console.log("Despues de rellenar los buffers: vertices = "+recurso.vertices[0]+" y normales = "+recurso.normales[0]);
    console.log("Nuestro recurso es "+ recurso);

    //Rellena el buffer de vértices
    recurso.vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, recurso.vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(recurso.vertices), gl.STATIC_DRAW);
    recurso.vertexBuffer.itemSize = 3; //coordenadas de los vertices de 3 en 3
    recurso.vertexBuffer.numItems = recurso.vertices.length;
    gl.bindBuffer(gl.ARRAY_BUFFER,null);


    //Rellena el buffer de índices
    recurso.indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, recurso.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(recurso.indices), gl.STATIC_DRAW);
    recurso.indexBuffer.itemSize = 1;
    recurso.indexBuffer.numItems = recurso.vertTriangulos.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);


    //Rellena el buffer de normales
    recurso.normBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, recurso.normBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(recurso.normales), gl.STATIC_DRAW);
    recurso.normBuffer.itemSize = 3;
    recurso.normBuffer.numItems = recurso.normales.length;
    gl.bindBuffer(gl.ARRAY_BUFFER,null);

   
    this.draw();
}

TRecursoMalla.prototype.draw = function(){
    console.log("Llego al draw() de TRecursoMalla");
    if(this.vertexBuffer != null){
        //Vuelca los buffers
         console.log("Que recurso estamos dibujando "+ this.getNombre());
        mat4.multiply(mvMatrix, mvMatrix, matrizActual);
        console.log("mvMatrix: " + mvMatrix);

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, this.vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        setMatrixUniforms();

        gl.drawElements(gl.TRIANGLES, this.indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    
    }
}


/* --------- T RECURSO TEXTURA ------------ */

function TRecursoTextura(imagen){
    this.setNombre(imagen);
	this.imagen = 0;
	this.textura = 0;
}

TRecursoTextura.prototype = new TRecurso;

TRecursoTextura.prototype.cargarFichero = function(nombre){
    this.textura = gl.createTexture();
    this.imagen = new Image();
    this.imagen.onload = function(){
        //se llama cuando la imagen se carga del todo
        console.log("Se ha terminado de cargar la imagen");
    }
    this.imagen.src = nombre; //tendria que pasarle la ruta

}
/*TRecursoTextura.prototype.getTextura = function(){
	return this.textura;
}*/

/* --------- T RECURSO MATERIAL ------------ */

function TRecursoMaterial(ambient, diffuse, specular, transparent){
	this.ambient = ambient ? vec4.create(ambient) : vec4.create();
  	this.diffuse = diffuse ? vec4.create(diffuse) : vec4.create();
  	this.specular = specular ? vec4.create(specular) : vec4.create();
  	this.transparent = transparent || 200.0;
}

TRecursoMaterial.prototype = new TRecurso;

TRecursoMaterial.prototype.parse = function(data){
	var obj = {};
    var keys=["Ka", "Kd", "Ks", "Ns"];
    var lines = data.split("\n");
    lines.forEach(function(line){
        var elems=line.split(" ");
        var key=elems[0];
        if(keys.indexOf(key)>-1){
            switch(key){
                case "Ns": obj["Ns"]=elems[1];
                break;
                default: obj[key]=elems.slice(1);
            }
        }        
    })    
    return obj;
}

TRecursoMaterial.prototype.cargarMaterial = function(src){
	var self = this;
    load(src, function(data){
		var temp=self.parse(data);
         this.ambient=temp.Ka;
         this.diffuse=temp.Kd;
         this.specular=temp.Ks;
         this.transparent=temp.Ns;
         console.log("Cargando el material ---"+src+"----");
    })
}

TRecursoMaterial.prototype.getAmbient = function(){
	return this.ambient;
}

TRecursoMaterial.prototype.setAmbient = function(ambient){
	this.ambient = utils.normalizeNaN(vec4.create(ambient));
}

TRecursoMaterial.prototype.getDiffuse = function(){
	return this.diffuse;
}

TRecursoMaterial.prototype.setDiffuse = function(diffuse){
	this.diffuse = utils.normalizeNaN(vec4.create(diffuse));
}

TRecursoMaterial.prototype.getSpecular = function(){
	return this.specular;
}

TRecursoMaterial.prototype.setSpecular = function(specular){
	this.specular = utils.normalizeNaN(vec4.create(specular));
}


function cargarFicheros(){
	if (document.getElementById('fileobj') != null) var meshobj = document.getElementById('fileobj').value;
	else var meshobj = null;
	if (meshobj) {
		var startIndex = (meshobj.indexOf('\\') >= 0 ? meshobj.lastIndexOf('\\') : meshobj.lastIndexOf('/'));
		var filename = meshobj.substring(startIndex);
		if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
			filename = filename.substring(1);
		}

		nuevamalla = new TRecursoMalla();
		nuevamalla.cargarFichero(filename);
	}
}


/*-------------------------- OBJETOS Y TMOTOR TAG ------------------- */

var pila = [];
var matrizActual = mat4.create();

/* ----------------------- TENTIDAD  ------------------------ */

function TEntidad(){

}

TEntidad.prototype.beginDraw = function(){
    console.log("BEGIN DRAW de TENTIDAD");
}

TEntidad.prototype.endDraw = function(){
    console.log("END DRAW de TENTIDAD");
}

/* -------------------- TNODO ------------------ */
function TNodo(entidad, hijos, padre){
    this.entidad = entidad || ''; //variable de tipo TEntidad
    this.hijos   = hijos   || []; //variable vector

    if(padre) padre.addChild(this);
    else this.padre = ''; //variable de tipo TNodo... Por eso se comrpueba que exista ya antes o no
}

TNodo.prototype.getEntidad = function(){
    return this.entidad;
}

TNodo.prototype.setEntidad = function(entidad){
    if(entidad instanceof TEntidad) this.entidad = entidad;
    else console.log("Este elemento no es de tipo Entidad");
}

TNodo.prototype.getPadre = function(){
    return this.padre;
}

TNodo.prototype.setPadre = function(padre){
    if(padre instanceof TNodo) this.padre = padre;
    else console.log("Este elemento no es un Nodo");
}

TNodo.prototype.getNumHijos = function(){
    return this.hijos.length;
}

TNodo.prototype.getHijos = function(){
    return this.hijos;
}

TNodo.prototype.existeHijo = function(hijo) {
    if(this.hijos.indexOf(hijo) != -1) return true;
    else return false;
};

TNodo.prototype.getHijo = function(index_hijo) {
    if(this.existeHijo(this.hijos(index_hijo))) return this.hijos(index_hijo);
    else return null;
};

TNodo.prototype.addHijo = function(hijo){
    hijo.setPadre(this); //fijamos el nodo actual como padre del hijo recién creado
    this.hijos.push(hijo); //añadimos a nuestro vector HIJOS el nuevo nodo HIJO
    return this.getNumHijos(); //DEVOLVER POR DEVOLVER
}

TNodo.prototype.removeHijo = function(hijo){
    if(this.existeHijo(hijo)){
        var index = this.hijos.indexOf(hijo);
        this.hijos.splice(index, 1);
    }
    else console.log("No se ha podido eliminar el hijo");
}

TNodo.prototype.removeHijos = function(){
    this.hijos = [];
}

TNodo.prototype.firstHijo = function(){
    return this.getHijo(0); //pasamos índice
}

TNodo.prototype.lastHijo = function(){
    return this.getHijo(this.getNumHijos() - 1);
}

TNodo.prototype.draw = function(){
    if(this.entidad) this.entidad.beginDraw();
    for(var i=0; i<this.hijos.length;i++){
        this.hijos[i].draw();
    }
    if(this.entidad) this.entidad.endDraw();
}


/* ----------------------- TTRANSFORM ------------------------ */

function TTransform(){
    this.matriz = mat4.create();
}

TTransform.prototype = new TEntidad;

/* GESTIONAR MATRIZ */
TTransform.prototype.identidad = function(){
     mat4.identity(this.matriz);
     console.log("Matriz identidad: "+this.matriz);
}

TTransform.prototype.cargar = function(matriz){
    this.matriz = matriz;
}

TTransform.prototype.trasponer = function(){
    mat4.transpose(this.matriz);
    console.log("Matriz traspuesta: "+this.matriz);
}

TTransform.prototype.invertir = function(){
    mat4.inverse(this.matriz);
    console.log("Matriz inversa: "+this.matriz);
}

/*TTransform.prototype.multiVector = function(vector){
    mat4.inverse(this.matriz);
    console.log("Matriz inversa: "+this.matriz);
}

TTransform.prototype.multiMatriz = function(matriz){
    mat4.inverse(this.matriz);
    console.log("Matriz inversa: "+this.matriz);
}*/

/* TRANSFORMACIONES BASICAS */
TTransform.prototype.trasladar = function(a, b, c){
    var vtras = vec3.create();
    vec3.set(vtras, a, b, c);

    mat4.translate(this.matriz, this.matriz, vtras);
    console.log("Matriz trasladada: "+this.matriz);
}

TTransform.prototype.rotar = function(a, b, c, angulo){
    var vrot = vec3.create();
    vec3.set(vrot, a, b, c);

    var rad = angulo * Math.PI / 180;

    mat4.rotate(this.matriz, this.matriz, rad, vrot);
    console.log("Matriz rotada: "+this.matriz);
}

TTransform.prototype.escalar = function(a, b, c){
    var vesc = vec3.create();
    vec3.set(vesc, a, b, c);

    mat4.scale(this.matriz, this.matriz, vesc);
    console.log("Matriz escalada: "+this.matriz);
}

/* DIBUJADO */
TTransform.prototype.beginDraw = function(){
    pila.push(matrizActual); //apilamos matriz actual
    mat4.multiply(matrizActual, this.matriz, matrizActual);
}

TTransform.prototype.endDraw = function(){
    matrizActual = pila.pop(); //desapilamos y la ponemos como actual
}

/* ----------------------- TLUZ ------------- */

function TLuz(intensidad){
    this.intensidad = intensidad;
}

TLuz.prototype = new TEntidad;

TLuz.prototype.setIntensidad = function(intensidad){
    this.intensidad = intensidad;
}

TLuz.prototype.getIntensidad = function(){
    return this.intensidad;
}

TLuz.prototype.beginDraw = function(pasada){
    console.log("BEGIN DRAW de TLUZ");
}

TLuz.prototype.endDraw = function(){
    console.log("END DRAW de TLUZ");
}

/* --------------------- TCAMARA --------------- */
function TCamara(esPerspectiva, cercano, lejano){
    this.esPerspectiva = esPerspectiva;
    this.cercano = cercano;
    this.lejano = lejano;
}

TCamara.prototype = new TEntidad;

TCamara.prototype.setPerspectiva = function(){

}

TCamara.prototype.setParalela = function(){
    
}

TCamara.prototype.beginDraw = function(pasada){
    //suele estar vacio
    console.log("BEGIN DRAW de TCAMARA");
}

TCamara.prototype.endDraw = function(){
    //suele estar vacio
    console.log("END DRAW de TCAMARA");
}

/* -------------- TMALLA --------------- */
function TMalla(malla){
    this.malla = malla;

    //Varios atributos...
    this.ambient = null;
    this.diffuse = null;
    this.specular = null;
    this.vertices = null;

    this.position = null;
    this.size     = null;
    this.rotation = null;
}

TMalla.prototype = new TEntidad;

TMalla.prototype.cargarMalla = function(src){
    var malla = gestorRecursos.getRecurso(src, "malla");
    console.log("Una vez cogemos el recurso... malla = "+malla)
    this.malla = malla;
}

TMalla.prototype.getFichero = function(){
    return this.malla;
}

TMalla.prototype.getPosition = function() {
    return this.position;
};

TMalla.prototype.setPosition = function(position) {
    this.position = position;
};

TMalla.prototype.getRotation = function() {
    return this.rotation;
};

TMalla.prototype.setRotation = function(rotation) {
    this.rotation = rotation;
};

TMalla.prototype.setSize = function(size) {
    this.size = size;
};

TMalla.prototype.getSize = function() {
    return this.size;
};

TMalla.prototype.beginDraw = function(){
    console.log("BEGIN DRAW de TMALLA");
    this.malla.draw();
   

}

TMalla.prototype.endDraw = function() {
    console.log("END DRAW de TMALLA");
}


function ElementoRegistro(nodo){
    this.activa = false;
    this.matriz = mat4.create();
    this.nodo = nodo;
}
function ElementoRegistroVP(posicion, tamanyo){
    this.posicion = posicion;
    this.tamanyo = tamanyo;
    this.activa = false;
}


function TMotorTAG(){
    this.escena = new TNodo;
    this.gestorRecursos = new TGestorRecursos;
    //atributos de luces, camaras y viewport
    this.matAuxLuces = new Array();
    this.matAuxCamara = mat4.create();
    this.viewports = new Array();
    this.luces = new Array();
    this.camaras = new Array();
}

TMotorTAG.prototype.crearNodo = function(padre, entidad){
    var nodo = new TNodo;
    padre.addHijo(nodo);
    nodo.setEntidad(entidad);
    return nodo;
}

TMotorTAG.prototype.crearTransform = function(){
    var transf = new TTransform;
    return transf;
}

TMotorTAG.prototype.crearCamara = function(){
    var cam = new TCamara;
    return cam;
}

TMotorTAG.prototype.crearNodoCamara = function(padre, camara){
    var cam = new TNodo;
    cam.setEntidad(camara);
    padre.addHijo(cam);
    return cam;
}

TMotorTAG.prototype.crearLuz = function(){
    var luz = new TLuz;
    return luz;
}

TMotorTAG.prototype.crearNodoLuz = function(padre, luzA){
    var luz = new TNodo;
    luz.setEntidad(luzA);
    padre.addHijo(luz);
    return luz;
}

TMotorTAG.prototype.crearMalla = function(src){
    var malla = new TMalla;
    malla.cargarMalla(src); 
    return malla;
}

//METODOS PARA EL REGISTRO Y MANEJO

TMotorTAG.prototype.registrarLuz = function(nodoLuz){
    this.luces.push(new ElementoRegistro(nodoLuz));
    return this.luces.length-1;
}

TMotorTAG.prototype.setLuzActiva = function(nLuz){
    if(this.luces[nLuz].activa) this.luces[nLuz].activa = false;
    else this.luces[nLuz].activa = true;
}

TMotorTAG.prototype.registrarCamara = function(nodoCam){
    this.camaras.push(new ElementoRegistro(nodoCam));
    return this.camaras.length-1;
}

TMotorTAG.prototype.setCamaraActiva = function(nCamara){
    for(var i in this.camaras){
        if(this.camaras[i].activa) this.camaras[i].activa = false;
    }
    this.camaras[nViewport].activa = true;
}

TMotorTAG.prototype.getCamaraActiva = function(){
    var cam = null;
    for(var i in this.camaras){
        if(this.camaras[i].activa) cam = this.camaras[i];
    }
    return cam;
}

TMotorTAG.prototype.registrarViewport = function(posicion, tamanyo){
    this.viewports.push(new ElementoRegistroVP(posicion, tamanyo));
    return this.viewports.length-1;
}

TMotorTAG.prototype.setViewportActivo = function(nViewport){
    for(var i in this.viewports){
        if(this.viewports[i].activa) this.viewports[i].activa = false;
    }
    this.viewports[nViewport].activa = true;
}

TMotorTAG.prototype.getViewportActivo = function(){
    var vp = null;
    for(var i in this.viewports){
        if(this.viewports[i].activa) vp = this.viewports[i];
    }
    return vp;
}

TMotorTAG.prototype.draw = function(){
    //Inicializar CANVAS Y LIBRERIAS
    var canvas = document.getElementById("mixeet-canvas");

    gl = initWebGL(canvas); //inicializamos el contexto de canvas
    if (gl){
        gl.clearColor(0.0, 0.0, 0.0, 1.0);                      // Establecer el color base en negro, totalmente opaco
        gl.enable(gl.DEPTH_TEST);                               // Habilitar prueba de profundidad
        gl.depthFunc(gl.LEQUAL);                                // Objetos cercanos opacan objetos lejanos
        gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);      // Limpiar el buffer de color asi como el de profundidad
    }

    initShaders();

    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //perspective() será la función que se ejecutará junto con la cámara
    mat4.perspective(pMatrix, gradToRad(45), gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
    mat4.identity(mvMatrix);

    mat4.translate(mvMatrix, mvMatrix, [-1.5,0.0,-8.0]); //sitúa la matriz de vista
    setMatrixUniforms();

    this.escena.draw();

}
