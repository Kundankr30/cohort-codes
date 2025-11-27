import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.Color;

class MyColor extends JFrame implements ActionListener
{
    JButton b;

    MyColor()
    {
        b=new JButton("Green");
        b.setBounds(80,70,100,40);     
        setLayout(null); 
        add(b);
        b.addActionListener(this);
        setSize(200,300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent ob)
    {
	String str=ob.getActionCommand();
	if(str.equals("Green"))
	{
		getContentPane().setBackground(Color.GREEN);
	}
        /*if (ob.getSource() == b) {
            getContentPane().setBackground(Color.GREEN);
        }*/
    }

    public static void main(String args[])
    {
        MyColor m1 = new MyColor();
        m1.setVisible(true);
    }
}
