import javax.swing.*;
class Button 
{
	public static void main (String args[])
	{
		JFrame jf=new JFrame();
		JButton b=new JButton("Sign-In");
		b.setBounds(30,50,100,50);
		jf.add(b);
		jf.setTitle("My Button");
		jf.setSize(200,200);
		jf.setLayout(null);
		jf.setVisible(true);
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
}