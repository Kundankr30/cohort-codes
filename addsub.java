import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class MyTextField extends JFrame implements ActionListener
{
	JTextField f1,f2,f3;
	JButton b1, b2;
	JLabel l1, l2, l3; 
	MyTextField(){
		l1=new JLabel("Enter 1st No.:");
		l1.setBounds(20,30,100,40);
		add(l1);
		f1=new JTextField();
		f1.setBounds(150,30,140,40);
		add(f1);
		l2=new JLabel("Enter 2nd No.:");
		l2.setBounds(20,80,100,40);
		add(l2);
		f2=new JTextField();
		f2.setBounds(150,80,140,40);
		add(f2);
		l3=new JLabel("Result:");
		l3.setBounds(20,130,100,40);
		add(l3);
		f3=new JTextField();
		f3.setBounds(150,130,140,40);
		add(f3);
		b1=new JButton("+");
		b1.setBounds(100,230,60,40);
		add(b1);
		b2=new JButton("-");
		b2.setBounds(200,230,60,40);
		add(b2);
		b1.addActionListener(this);
		b2.addActionListener(this);
		setLayout(null);
		setVisible(true);
		setSize(300,300);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);	
	}
	public void actionPerformed(ActionEvent e)
	{
		//if(e.getSource()==b1)
		//{
			int a=Integer.parseInt(f1.getText());
			int b=Integer.parseInt(f2.getText());
			int c=0;
			 if(e.getSource()==b1)	{  
                            c=a+b;  
        		}         
        		else if(e.getSource()==b2){
            			  c=a-b;
       			 }

                 //       int c=a+b;
			String s =String.valueOf(c);
			f3.setText(s);
		//}
	}
	public static void main(String args[])
	{	
		MyTextField mf=new MyTextField();
		mf.setTitle("My Text Field");
	}
}
		