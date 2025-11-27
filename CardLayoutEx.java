import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class CardLayoutEx extends JFrame implements ActionListener {
    CardLayout card;
    JPanel panel;
    JButton b1, b2, b3;
    JButton next, prev;
    CardLayoutEx() {
        card = new CardLayout();
        panel = new JPanel(card);
        // Creating 3 small panels (cards)
        b1 = new JButton("Card 1");
        b2 = new JButton("Card 2");
        b3 = new JButton("Card 3");
        JPanel p1 = new JPanel();
        p1.add(b1);
        JPanel p2 = new JPanel();
        p2.add(b2);
        JPanel p3 = new JPanel();
        p3.add(b3);
        // Adding cards
        panel.add(p1, "first");
        panel.add(p2, "second");
        panel.add(p3, "third");
        // Buttons to switch cards
        next = new JButton("Next");
        prev = new JButton("Previous");
        next.addActionListener(this);
        prev.addActionListener(this);
        // Frame layout
        setLayout(new BorderLayout());
        add(panel, BorderLayout.CENTER);
        JPanel control = new JPanel();
        control.add(prev);
        control.add(next);
        add(control, BorderLayout.SOUTH);
        setSize(300, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == next)
            card.next(panel);
        else
            card.previous(panel);
    }
    public static void main(String[] args) {
        CardLayoutEx ob=new CardLayoutEx();
    }
}
