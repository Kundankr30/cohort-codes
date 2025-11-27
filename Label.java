import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.Color;
class MyLabel extends JFrame implements ActionListener
{
	JButton b;
	MyLabel()
	{
		JLabel l=new JLabel("My Label:");
		b=new JButton("Push");
		b.setBounds(80,70,100,40);
		l.setBounds(10,70,100,30);
		Font f = new Font ("arial", Font.BOLD, 34);
		setFont (f);
		setBackground (Color.WHITE);

		add(l);
		add(b);
		b.addActionListener(this);
		setSize(200,300);
		setLayout(null);
		setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
	public void actionPerformed(ActionEvent ob)
	{
		if(ob.getSource() == b){
                      getContentPane().setBackground(Color.GREEN);
		}
	}	
	public static void main(String args[])
	{
		MyLabel m1=new MyLabel();
		m1.setVisible(true);
	}
}

